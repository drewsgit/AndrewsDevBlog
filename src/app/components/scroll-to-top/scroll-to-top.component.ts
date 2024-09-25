import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent {
  scrolled: boolean = false;

  @HostListener("window:scroll", [])

  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
}

  topFunction(e:any) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
}
