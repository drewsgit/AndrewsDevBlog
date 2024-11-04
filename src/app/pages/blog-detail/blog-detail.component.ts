import { CommonModule, Location } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
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

  id: any;
  data: any;

  constructor(private router: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"];

    this.dbService.getPostByID(this.id).subscribe((res: IPost[]) => {
      console.log(res);
      if (res.length > 0) {
        this.data = res[0];
      }
    });
  }

  goPreviousPage() {
    this.location.back();
  }
}
