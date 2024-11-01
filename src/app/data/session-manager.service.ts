import { Injectable, signal, WritableSignal } from "@angular/core";
import { IUser } from "./db.service";

@Injectable({
  providedIn: "root",
})
export class SessionManagerService {
  private readonly IS_LOGGEDIN_KEY = "ISLOGGEDIN";
  user: WritableSignal<IUser> = signal<IUser>(null);

  constructor() {}

  public get isLoggedIn(): boolean {
    return Boolean(sessionStorage.getItem(this.IS_LOGGEDIN_KEY));
  }

  public set isLoggedIn(value: boolean) {
    sessionStorage.setItem(this.IS_LOGGEDIN_KEY, value.toString());
  }

  public logout() {
    sessionStorage.removeItem(this.IS_LOGGEDIN_KEY);
    this.user.set(null);
  }

  // public getUser(): IUser {
  //   return this._user();
  // }

  // public setUser(v: IUser) {
  //   this._user.set(v);
  // }
}
