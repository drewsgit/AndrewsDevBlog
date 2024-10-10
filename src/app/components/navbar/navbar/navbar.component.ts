import { CommonModule } from "@angular/common";
import { Component, HostListener, Input, input } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  @Input() bg: any;

  scroll: boolean = false;

  @HostListener("window:scroll", [])
  scrollHandler() {
    this.scroll = window.scrollY > 50;
  }

  constructor(private router: Router) {}

  current: string = "";

  ngOnInit(): void {
    window.scroll(0, 0);
    this.current = this.router.url;
    console.log("this.current: ", this.current);
  }

  open: boolean = false;

  toggleMenu(e: any) {
    this.open = !this.open;
  }
}
