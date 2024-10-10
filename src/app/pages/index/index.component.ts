import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { DbService, IPost } from "../../data/db.service";

@Component({
  selector: "app-index",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.scss",
})
export class IndexComponent implements OnInit {
  blogData: IPost[] = [];

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    this.dbService.getPosts().subscribe((res: IPost[]) => {
      console.log(res);
      this.blogData = res;
    });
  }
}
