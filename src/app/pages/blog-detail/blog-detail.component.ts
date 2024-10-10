import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";

import { FooterComponent } from "../../components/footer/footer/footer.component";
import { ScrollToTopComponent } from "../../components/scroll-to-top/scroll-to-top.component";
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";

import { DbService, IPost } from "../../data/db.service";

@Component({
  selector: "app-blog-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./blog-detail.component.html",
  styleUrl: "./blog-detail.component.scss",
})
export class BlogDetailComponent {
  dbService = inject(DbService);

  constructor(private router: ActivatedRoute) {}

  id: any;
  data: any;
  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"];

    this.dbService.getPostByID(this.id).subscribe((res: IPost[]) => {
      console.log(res);
      if (res.length > 0) {
        this.data = res[0];
      }
    });
  }
}
