import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-personal-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './personal-navbar.component.html',
  styleUrl: './personal-navbar.component.scss'
})
export class PersonalNavbarComponent {
  @Input() bg: any
  scroll: boolean = false

  @HostListener('window:scroll', [])

  scrollHandler() {
    this.scroll = window.scrollY > 50
  }

  open: boolean = false;

  toggleMenu(e: any) {
    e.preventDefault();
    this.open = !this.open;
  }

  current: string = ""

  constructor(private router: Router) {
    window.scroll(0, 0)
    this.current = this.router.url
  }

}
