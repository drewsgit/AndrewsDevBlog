import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SessionManagerService {
  private readonly IS_LOGGEDIN_KEY = "ISLOGGEDIN";

  constructor() {}

  public get isLoggedIn(): boolean {
    return Boolean(sessionStorage.getItem(this.IS_LOGGEDIN_KEY));
  }

  public set isLoggedIn(value: boolean) {
    sessionStorage.setItem(this.IS_LOGGEDIN_KEY, value.toString());
  }
}
