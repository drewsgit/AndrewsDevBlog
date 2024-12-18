import { Routes } from "@angular/router";
import { DasbhoardComponent } from "./pages/dashboard/dashboard.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { BlogDetailComponent } from "./pages/blog-detail/blog-detail.component";
import { ControlFlowComponent } from "./pages/demo/control-flow/control-flow.component";
import { ComponentParamsComponent } from "./pages/demo/component-params/component-params.component";
import { ObservableComponent } from "./pages/demo/observable/observable.component";
import { RxjsComponent } from "./pages/demo/rxjs/rxjs.component";
import { TemplateComponent } from "./pages/demo/template/template.component";
import { ReactiveComponent } from "./pages/demo/reactive/reactive.component";
import { SignalComponent } from "./pages/demo/signal/signal.component";
import { ExternalLayoutComponent } from "./components/layouts/external-layout/external-layout.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./components/guards/auth-guard.guard";

export const routes: Routes = [
  {
    path: "login",
    component: ExternalLayoutComponent,
    children: [{ path: "", component: LoginComponent }],
  },
  {
    path: "blog-detail",
    component: ExternalLayoutComponent,
    children: [{ path: "", component: BlogDetailComponent }],
  },
  {
    path: "blog-detail/:id",
    component: ExternalLayoutComponent,
    children: [{ path: "", component: BlogDetailComponent }],
  },
  {
    path: "about-me",
    component: ExternalLayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./pages/about-me/about-me.component").then(
            (m) => m.AboutMeComponent
          ),
      },
    ],
  },
  {
    path: "admin",
    component: ExternalLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "posts",
        loadComponent: () =>
          import("./pages/admin/post/post-table/post-table.component").then(
            (m) => m.PostTableComponent
          ),
      },
      {
        path: "add-edit-post",
        loadComponent: () =>
          import(
            "./pages/admin/post/add-edit-post/add-edit-post.component"
          ).then((m) => m.AddEditPostComponent),
      },
    ],
  },
  {
    path: "",
    component: ExternalLayoutComponent,
    children: [{ path: "", component: DasbhoardComponent }],
  },
  {
    path: "**",
    component: ExternalLayoutComponent,
    children: [{ path: "", component: DasbhoardComponent }],
  },
  { path: "contact", component: ContactComponent },
  { path: "demo/control-flow", component: ControlFlowComponent },
  { path: "demo/component-param", component: ComponentParamsComponent },
  { path: "demo/observable", component: ObservableComponent },
  { path: "demo/rxjs", component: RxjsComponent },
  { path: "demo/template", component: TemplateComponent },
  { path: "demo/reactive", component: ReactiveComponent },
  { path: "demo/signal", component: SignalComponent },
];
