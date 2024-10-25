import { Component, inject, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-delete-post-confirm",
  standalone: true,
  imports: [],
  templateUrl: "./delete-post-confirm.component.html",
  styleUrl: "./delete-post-confirm.component.scss",
})
export class DeletePostConfirmComponent {
  @Input() title: string;

  modal = inject(NgbActiveModal);
}
