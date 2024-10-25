import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { DbService, IPost } from "../../../../data/db.service";
import { finalize, Observable, Subject, takeUntil } from "rxjs";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [TableModule, CommonModule, MatProgressSpinnerModule, RouterLink],
  templateUrl: "./post-table.component.html",
  styleUrl: "./post-table.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class PostTableComponent implements OnInit, OnDestroy {
  dbService = inject(DbService);
  destroy$: Subject<boolean> = new Subject<boolean>();
  posts$: IPost[] = [];
  inProgress = false;

  ngOnInit(): void {
    this.loadTable();
  }

  delete(id: number) {
    this.dbService
      .deletePost(id)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.inProgress = false))
      )
      .subscribe({
        error: () => {},
        next: (res) => {
          this.loadTable();
        },
      });
  }

  private loadTable() {
    this.inProgress = true;
    this.dbService
      .getPosts()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.inProgress = false))
      )
      .subscribe({
        error: () => {},
        next: (res) => {
          this.posts$ = res;
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
