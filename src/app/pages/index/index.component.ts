import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { DbService, IPost } from "../../data/db.service";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PaginatorModule, PaginatorState } from "primeng/paginator";
import { catchError, forkJoin, Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-index",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProgressSpinnerModule,
    MatProgressSpinnerModule,
    PaginatorModule,
  ],
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.scss",
})
export class IndexComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  recentPosts: IPost[] = [];
  first: number = 0; // Count of first record in page
  rowsPerPage: number = 5; // Number of records per page
  totalRecords: number = 0; // Total number of records
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    forkJoin({
      posts$: this.dbService.getPostsWithPaging(this.rowsPerPage, this.first),
      count$: this.dbService.getPostsCount(),
    })
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          console.log(error);
          throw error;
        })
      )
      .subscribe((res) => {
        // console.log('post data:', res.posts$);
        // console.log('count data:', res.count$);
        this.posts = res.posts$;
        this.totalRecords = res.count$;

        // Only set recent posts for first page
        if (this.first === 0) this.recentPosts = this.posts;
      });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first;
    this.rowsPerPage = event.rows;
    this.getData();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
