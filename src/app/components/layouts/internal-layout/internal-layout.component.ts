import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../../navbar/navbar/navbar.component";
import { FooterComponent } from "../../footer/footer/footer.component";
import { ScrollToTopComponent } from "../../scroll-to-top/scroll-to-top.component";

@Component({
  selector: "app-internal-layout",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent,
  ],
  templateUrl: "./internal-layout.component.html",
  styleUrl: "./internal-layout.component.scss",
})
export class InternalLayoutComponent {}
