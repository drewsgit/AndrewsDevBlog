import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

export const routes: Routes = [
    { 'path': '', component: IndexComponent },

    { 'path': 'about-me', component: AboutMeComponent },
    { 'path': 'contact', component: ContactComponent },
    { 'path': 'blog-detail', component: BlogDetailComponent },
    { 'path': 'blog-detail/:id', component: BlogDetailComponent },
];
