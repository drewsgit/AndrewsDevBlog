import { Injectable, signal, WritableSignal } from "@angular/core";
import { IUser } from "./db.service";

@Injectable({
  providedIn: "root",
})
export class SessionManagerService {
  private readonly IS_LOGGEDIN_KEY = "IS_LOGGED_IN";
  private readonly USER_KEY = "USER_KEY";
  // private _user: WritableSignal<IUser> = signal<IUser>(null);

  constructor() {}

  public get isLoggedIn(): boolean {
    return Boolean(sessionStorage.getItem(this.IS_LOGGEDIN_KEY));
  }

  public set isLoggedIn(value: boolean) {
    sessionStorage.setItem(this.IS_LOGGEDIN_KEY, value.toString());
  }

  public logout() {
    sessionStorage.removeItem(this.IS_LOGGEDIN_KEY);
    sessionStorage.removeItem(this.USER_KEY);
  }

  public getUser(): IUser {
    return JSON.parse(sessionStorage.getItem(this.USER_KEY)) as IUser;
  }

  public setUser(v: IUser) {
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(v));
  }
}
