import { CanActivateFn } from "@angular/router";
import { SessionManagerService } from "../../data/session-manager.service";
import { inject } from "@angular/core";

export const AuthGuard: CanActivateFn = (route, state) => {
  const sessionManager = inject(SessionManagerService);
  if (!sessionManager.isLoggedIn) console.log("Invalid Access: ", state.url);
  return sessionManager.isLoggedIn;
};
