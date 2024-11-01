import { CommonModule } from "@angular/common";
import {
  Component,
  HostListener,
  Input,
  input,
  signal,
  WritableSignal,
} from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { IUser } from "../../../data/db.service";
import { SessionManagerService } from "../../../data/session-manager.service";

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
  user = this.sessionManager.user();
  isLoggedIn = this.sessionManager.isLoggedIn;

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
  }

  open: boolean = false;

  toggleMenu(e: any) {
    this.open = !this.open;
  }

  logout() {
    this.sessionManager.logout();
    this.router.navigate(["/login"]);
  }
}
