import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { FooterComponent } from '../../components/footer/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';
import { NavbarComponent } from '../../components/navbar/navbar/navbar.component';

import BlogData from '../../data/business.json'

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  blogData = BlogData

  constructor(private router: ActivatedRoute) { }

  id: any
  data: any
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.data = this.blogData.find((item: any) => item.id === parseInt(this.id))
  }
}
