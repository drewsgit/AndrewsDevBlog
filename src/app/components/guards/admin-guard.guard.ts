import { CanActivateFn } from "@angular/router";
import { SessionManagerService } from "../../data/session-manager.service";
import { inject } from "@angular/core";

export const AdminGuard: CanActivateFn = (route, state) => {
  const sessionManager = inject(SessionManagerService);
  return sessionManager.isLoggedIn;
};
