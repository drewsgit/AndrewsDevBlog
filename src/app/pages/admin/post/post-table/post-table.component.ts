import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { DbService, IPost } from "../../../../data/db.service";
import {
  catchError,
  finalize,
  forkJoin,
  Observable,
  Subject,
  takeUntil,
} from "rxjs";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router, RouterLink } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DeletePostConfirmComponent } from "./delete-post-confirm/delete-post-confirm.component";
import { PaginatorModule, PaginatorState } from "primeng/paginator";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    MatProgressSpinnerModule,
    RouterLink,
    PaginatorModule,
  ],
  templateUrl: "./post-table.component.html",
  styleUrl: "./post-table.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class PostTableComponent implements OnInit, OnDestroy {
  dbService = inject(DbService);
  modalService = inject(NgbModal);
  router = inject(Router);

  destroy$: Subject<boolean> = new Subject<boolean>();
  posts$: IPost[] = [];
  inProgress = false;

  first: number = 0; // Count of first record in page
  rowsPerPage: number = 10; // Number of records per page
  totalRecords: number = 0; // Total number of records

  ngOnInit(): void {
    this.loadTable();
  }

  deleteConfirm(post: IPost) {
    const modalRef = this.modalService.open(DeletePostConfirmComponent);
    modalRef.componentInstance.title = post.title;

    modalRef.result.then(
      (result) => {
        console.log("result: ", result);
        this.deletePost(post.id);
      },
      (reason) => {
        console.log("reason: ", reason);
      }
    );
  }

  deletePost(id: number) {
    this.dbService
      .deletePost(id)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.inProgress = false))
      )
      .subscribe({
        error: (err) => {
          console.log("Error: ", err);
        },
        next: () => {
          this.loadTable();
        },
      });
  }

  private loadTable() {
    this.inProgress = true;

    forkJoin({
      posts$: this.dbService.getPostsWithPaging(this.rowsPerPage, this.first),
      count$: this.dbService.getPostsCount(),
    })
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          console.log(error);
          this.inProgress = false;
          throw error;
        })
      )
      .subscribe((res) => {
        // console.log('post data:', res.posts$);
        // console.log('count data:', res.count$);
        this.posts$ = res.posts$;
        this.totalRecords = res.count$;
        this.inProgress = false;
      });
  }

  editPost(post: IPost) {
    this.router.navigate(["/admin/add-edit-post"], {
      queryParams: { type: "edit", id: post.id },
    });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first;
    this.rowsPerPage = event.rows;
    this.loadTable();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
