import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavbarComponent } from '../../components/navbar/navbar/navbar.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FooterComponent } from '../../components/footer/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent,
    ScrollToTopComponent,
    ScrollToTopComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
