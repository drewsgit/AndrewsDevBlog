import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-small',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer-small.component.html',
  styleUrl: './footer-small.component.scss'
})
export class FooterSmallComponent {

  date:any

  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }

  social = [
    {
      link:'https://dribbble.com/shreethemes',
      icon:'uil uil-dribbble'
    },
    {
      link:'https://www.facebook.com/shreethemes',
      icon:'uil uil-facebook'
    },
    {
      link:'https://www.instagram.com/shreethemes',
      icon:'uil uil-instagram'
    },
    {
      link:'https://twitter.com/shreethemes',
      icon:'uil uil-twitter'
    },
    {
      link:'mailto:support@shreethemes.in',
      icon:'uil uil-envelope'
    },
  ]

}
