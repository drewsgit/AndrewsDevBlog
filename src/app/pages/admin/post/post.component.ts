import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { DbService, IPost } from "../../../data/db.service";
import { finalize, Observable, Subject, takeUntil } from "rxjs";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [TableModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit, OnDestroy {
  dbService = inject(DbService);
  destroy$: Subject<boolean> = new Subject<boolean>();
  posts$: IPost[] = [];
  inProgress = false;

  ngOnInit(): void {
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