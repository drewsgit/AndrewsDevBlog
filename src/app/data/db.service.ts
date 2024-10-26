import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/internal/Observable";

export interface IUser {
  id: number;
  name: string;
  userName: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IPost {
  id?: number;
  title: string;
  subtitle: string;
  body: string;
  tag_id: number;
  date_created: string;
  image: string;
}

export interface ITag {
  id: number;
  tag: string;
}

@Injectable({
  providedIn: "root",
})
export class DbService {
  baseURL = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log("BaseURL: ", this.baseURL);
  }

  /* Start Post */
  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.baseURL}/posts`);
  }

  getPostByID(id: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.baseURL}/posts/${id}`);
  }

  addPost(payload: IPost) {
    return this.http.post<IPost>(`${this.baseURL}/posts`, payload);
  }

  updatePost(id: number, payload: IPost) {
    return this.http.patch<IPost>(`${this.baseURL}/posts/${id}`, payload);
  }

  deletePost(id: number) {
    return this.http.delete<IPost>(`${this.baseURL}/posts/${id}`);
  }
  /* End Post */

  getTags(): Observable<ITag[]> {
    return this.http.get<ITag[]>(`${this.baseURL}/tags`);
  }

  login(payload: ILogin): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseURL}/login`, payload);
  }
}
