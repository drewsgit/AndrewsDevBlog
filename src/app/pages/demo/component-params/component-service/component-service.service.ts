import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor() { }

  private _name;
  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }

}
