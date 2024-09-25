import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

export interface IPost {
  id: number,
  title: string,
  subtitle: string,
  body: string,
  tag_id: number,
  date_created: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DbService {

  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log('BaseURL: ', this.baseURL);
  }

  getPosts(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(`${this.baseURL}/posts`)
  }
}
