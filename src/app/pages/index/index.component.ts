import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../components/navbar/navbar/navbar.component';
import { BlogSidebarComponent } from '../../components/blog-sidebar/blog-sidebar.component';
import { FooterComponent } from '../../components/footer/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';

import BlogData from '../../data/business.json'

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
export class IndexComponent {
  blogData = BlogData
}
