import { CommonModule } from "@angular/common";
import {
  Component,
  HostListener,
  Input,
  input,
  signal,
  ViewEncapsulation,
  WritableSignal,
} from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { SessionManagerService } from "../../../data/session-manager.service";
import { MenubarModule } from "primeng/menubar";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterLink, MenubarModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  @Input() bg: any;

  scroll: boolean = false;
  user = this.sessionManager.getUser();
  isLoggedIn = this.sessionManager.isLoggedIn;
  menuItems: MenuItem[] | undefined;

  @HostListener("window:scroll", [])
  scrollHandler() {
    this.scroll = window.scrollY > 50;
  }

  constructor(
    private router: Router,
    private sessionManager: SessionManagerService
  ) {}

  current: string = "";

  ngOnInit(): void {
    window.scroll(0, 0);
    this.current = this.router.url;
    console.log("this.current: ", this.current);

    this.menuItems = [
      {
        label: "Home",
        route: "/",
      },
      {
        label: "About Me",
        route: "/about-me",
      },
      {
        label: "Admin",
        items: [
          {
            label: "Posts",
            route: "/admin/posts",
          },
        ],
      },
    ];

    // If logged in, show logged in user with log out link.  Otherwise, show Login link.
    if (this.sessionManager.isLoggedIn && this.user) {
      this.menuItems.push({
        label: this.user.name,
        style: { "margin-left": "auto" },
        items: [
          {
            label: "Sign Out",
            command: () => this.logout(),
          },
        ],
      });
    } else {
      this.menuItems.push({
        label: "Login",
        route: "/login",
        style: { "margin-left": "auto" },
      });
    }
  }

  logout() {
    this.sessionManager.logout();
    this.router.navigate(["/login"]);
  }
}
