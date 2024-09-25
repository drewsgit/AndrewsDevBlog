import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer-two.component.html',
  styleUrl: './footer-two.component.scss'
})
export class FooterTwoComponent {

  social = [
    "mdi mdi-facebook",
    "mdi mdi-instagram",
    "mdi mdi-twitter",
    "mdi mdi-github",
    "mdi mdi-linkedin",
    "mdi mdi-whatsapp",
  ]

  date:any

  constructor(){
    this.date = new Date().getFullYear()
  }
}
