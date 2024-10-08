import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { ControlFlowComponent } from './pages/demo/control-flow/control-flow.component';
import { ComponentParamsComponent } from './pages/demo/component-params/component-params.component';
import { ObservableComponent } from './pages/demo/observable/observable.component';
import { RxjsComponent } from './pages/demo/rxjs/rxjs.component';
import { TemplateComponent } from './pages/demo/template/template.component';
import { ReactiveComponent } from './pages/demo/reactive/reactive.component';
import { SignalComponent } from './pages/demo/signal/signal.component';

export const routes: Routes = [
    { 'path': '', component: IndexComponent },
    { 'path': 'about-me', component: AboutMeComponent },
    { 'path': 'contact', component: ContactComponent },
    { 'path': 'blog-detail', component: BlogDetailComponent },
    { 'path': 'blog-detail/:id', component: BlogDetailComponent },

    { 'path': 'demo/control-flow', component: ControlFlowComponent },
    { 'path': 'demo/component-param', component: ComponentParamsComponent },
    { 'path': 'demo/observable', component: ObservableComponent },
    { 'path': 'demo/rxjs', component: RxjsComponent },
    { 'path': 'demo/template', component: TemplateComponent },
    { 'path': 'demo/reactive', component: ReactiveComponent },
    { 'path': 'demo/signal', component: SignalComponent },

];
