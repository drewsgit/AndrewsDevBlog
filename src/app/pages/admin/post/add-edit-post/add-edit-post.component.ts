import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: "app-add-edit-post",
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: "./add-edit-post.component.html",
  styleUrl: "./add-edit-post.component.scss",
})
export class AddEditPostComponent implements OnInit {
  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);

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
    alert("submit");
  }

  reset() {
    this.forms.reset();
  }
}
