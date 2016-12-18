import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { User } from './user.model';

@Injectable()
export class UserService {

  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  public getUsers() : Observable<User[]> {
    return this.http.get(this.url)
      .map(response => response.json());
  }

  public getUser(userId) {
    return this.http.get(this.getUserUrl(userId))
      .map(response => response.json());
  }

  public addUser(user: User) {
    return this.http.post(this.url, JSON.stringify(user))
      .map(response => response.json());
  }

  public updateUser(user: User) {
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
      .map(response => response.json());
  }

  public deleteUser(userId) {
    return this.http.delete(this.getUserUrl(userId))
      .map(response => response.json());
  }

  private getUserUrl(userId) {
    return this.url + '/' + userId;
  }
}
