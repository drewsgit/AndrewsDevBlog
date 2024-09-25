import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../components/navbar/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';

import { tns } from 'tiny-slider';

import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    CountUpModule,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  ngAfterViewInit(): void {
  }
}
