import { CommonModule, DatePipe } from "@angular/common";
import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { DbService } from "../../../../data/db.service";
import { finalize, Subject, takeUntil } from "rxjs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-add-edit-post",
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./add-edit-post.component.html",
  styleUrl: "./add-edit-post.component.scss",
})
export class AddEditPostComponent implements OnInit, OnDestroy {
  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  dbService = inject(DbService);
  router = inject(Router);
  datePipe = inject(DatePipe);

  destroy$: Subject<boolean> = new Subject<boolean>();
  inProgress = false;

  forms = this.fb.group({
    title: ["", Validators.required],
    subtitle: [""],
    body: [""],
  });

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;
    console.log(queryParams["type"]);
  }

  submit() {
    this.inProgress = true;
    this.dbService
      .addPost({
        title: this.forms.get("title").value,
        subtitle: this.forms.get("subtitle").value,
        body: this.forms.get("body").value,
        tag_id: 2,
        date_created: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
        image: "assets/images/blog-entry.jpg",
      })
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          console.log("finalize");
          this.inProgress = false;
        })
      )
      .subscribe({
        error: () => {
          console.log("fail");
        },
        next: () => {
          console.log("success");
          this.router.navigate(["/admin/posts"]);
        },
      });
  }

  reset() {
    this.forms.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
