import { Component, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DbService } from "../../data/db.service";
import { FormsModule } from "@angular/forms";
import { finalize, Subject, takeUntil } from "rxjs";
import { SessionManagerService } from "../../data/session-manager.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent implements OnDestroy {
  userName = "";
  password = "";
  showLoginError = false;
  inProgress = false;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dbService: DbService,
    private sessionManagerService: SessionManagerService,
    private router: Router
  ) {}

  login() {
    this.inProgress = true;
    this.showLoginError = false;
    console.log(this.userName, " ", this.password);
    this.dbService
      .login({ username: this.userName, password: this.password })
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          console.log("finalize");
          this.inProgress = false;
        })
      )
      .subscribe({
        error: () => {
          console.log("fail");
          this.sessionManagerService.isLoggedIn = false;
          this.sessionManagerService;
          this.showLoginError = true;
        },
        next: (res: any) => {
          console.log("success");
          this.sessionManagerService.isLoggedIn = true;
          this.sessionManagerService.setUser(res.user);
          this.router.navigate(["/"]);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
