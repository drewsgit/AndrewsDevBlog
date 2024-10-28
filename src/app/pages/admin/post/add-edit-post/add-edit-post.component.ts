import { CommonModule, DatePipe } from "@angular/common";
import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { DbService, IPost, ITag } from "../../../../data/db.service";
import { finalize, Observable, Subject, takeUntil } from "rxjs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CalendarModule } from "primeng/calendar";

@Component({
  selector: "app-add-edit-post",
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
    MatProgressSpinnerModule,
    CalendarModule,
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
  tags$: Observable<ITag[]>;
  type: string;
  id: number;

  forms = this.fb.group({
    title: ["", Validators.required],
    subtitle: [""],
    body: [""],
    tag: [1],
    datePosted: [""],
  });

  ngOnInit(): void {
    this.tags$ = this.dbService.getTags();

    const queryParams = this.route.snapshot.queryParams;
    this.id = queryParams["id"];
    this.type = queryParams["type"];
    console.log("type: ", this.type, " id: ", this.id);

    if (this.type === "edit") {
      this.populate();
    } else {
      const defaultDatePosted: any = new Date();
      this.forms.get("datePosted").setValue(defaultDatePosted);
    }
  }

  populate() {
    this.dbService.getPostByID(this.id).subscribe((res: IPost[]) => {
      console.log(res);
      if (res.length > 0) {
        const post: IPost = res[0];
        const datePosted: any = new Date(post.date_posted); // p-calendar requires a date object

        this.forms.patchValue({
          title: post.title,
          subtitle: post.subtitle,
          body: post.body,
          tag: post.tag_id,
          datePosted: datePosted,
        });
      }
    });
  }

  // datePosted: post.date_posted,

  addPost() {
    this.dbService
      .addPost({
        title: this.forms.get("title").value,
        subtitle: this.forms.get("subtitle").value,
        body: this.forms.get("body").value,
        tag_id: this.forms.get("tag").value,
        date_created: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
        image: "assets/images/blog-entry.jpg",
        date_posted: this.forms.get("datePosted").value,
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

  updatePost() {
    this.dbService
      .updatePost(this.id, {
        title: this.forms.get("title").value,
        subtitle: this.forms.get("subtitle").value,
        body: this.forms.get("body").value,
        tag_id: this.forms.get("tag").value,
        date_created: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
        image: "assets/images/blog-entry.jpg",
        date_posted: this.forms.get("datePosted").value,
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

  submit() {
    this.inProgress = true;
    // console.log(this.forms.value);
    this.type === "add" ? this.addPost() : this.updatePost();
  }

  reset() {
    this.forms.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
