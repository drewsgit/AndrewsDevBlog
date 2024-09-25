import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../components/navbar/navbar/navbar.component';
import { BlogSidebarComponent } from '../../components/blog-sidebar/blog-sidebar.component';
import { FooterComponent } from '../../components/footer/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';
import { DbService, IPost } from '../../data/db.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogSidebarComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  blogData: IPost[] = [];

  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.dbService.getPosts().subscribe((res: IPost[]) => {
      console.log(res);
      this.blogData = res
    })
  }
}
