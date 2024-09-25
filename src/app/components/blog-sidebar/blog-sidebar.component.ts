import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-sidebar.component.html',
  styleUrl: './blog-sidebar.component.scss'
})
export class BlogSidebarComponent {
    recentPost =[
      {
        image:'assets/images/agency/1.jpg',
        title:'Consultant Business',
        date:'13th March 2023'
      },
      {
        image:'assets/images/agency/2.jpg',
        title:'Grow Your Business',
        date:'5th May 2023'
      },
      {
        image:'assets/images/agency/3.jpg',
        title:'Look On The Glorious Balance',
        date:'19th June 2023'
      },
    ]

    tag = [
      'Business','Finance','Marketing','Fashion','Bride','Lifestyle','Travel','Beauty','Video','Audio'
    ]
}
