import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer/footer.component";
import { ScrollToTopComponent } from "./components/scroll-to-top/scroll-to-top.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "getblog";
}
