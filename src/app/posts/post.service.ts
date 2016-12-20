import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Post } from './post.model';

@Injectable()
export class PostService {

    private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { }

  public getPosts (filter?) : Observable<Post[]> {
    let url = this.url;

    if (filter && filter.userId) {
      url += "?userId=" + filter.userId;
    }

    return this.http.get(url)
        .map(response => response.json());
  }

  public getComments(postId) {
    return this.http.get(this.url + "/" + postId + "/comments")
      .map(response => response.json());
  }

}
