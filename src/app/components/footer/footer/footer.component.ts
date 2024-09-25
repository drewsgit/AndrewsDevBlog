import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  date: any

  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }

  contact() {
    window.location.href = "mailto:andrewlwong2@gmail.com";
  }
}
