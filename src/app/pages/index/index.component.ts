import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { DbService, IPost } from "../../data/db.service";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PaginatorModule, PaginatorState } from "primeng/paginator";

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

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
export class IndexComponent implements OnInit {
  blogData: IPost[] = [];
  first: number = 0;
  rows: number = 10;

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    this.dbService.getPosts().subscribe((res: IPost[]) => {
      console.log(res);
      this.blogData = res;
    });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
