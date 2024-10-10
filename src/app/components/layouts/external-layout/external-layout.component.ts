import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../../navbar/navbar/navbar.component";
import { FooterComponent } from "../../footer/footer/footer.component";
import { ScrollToTopComponent } from "../../scroll-to-top/scroll-to-top.component";

@Component({
  selector: "app-external-layout",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent,
  ],
  templateUrl: "./external-layout.component.html",
  styleUrl: "./external-layout.component.scss",
})
export class ExternalLayoutComponent {}
