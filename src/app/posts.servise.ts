import { Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Post} from "./post.model";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsServise {
  error = new Subject();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content }
    this.http.post<{ name: string }>(
      'https://ng-learn-angular-b1d3a-default-rtdb.firebaseio.com/posts.json',
      postData,
    {
      observe: 'response'
    }
    )
      .subscribe(responseData => {
        console.log(responseData);
      }, error =>
        this.error.next(error.message)
      )
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post} >('https://ng-learn-angular-b1d3a-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header':'Hallo'}
          )
        })
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push( {...responseData[key], id: key })
            }
          }
        return postArray;
      }));
  }

  deletePosts() {
    return this.http.delete('https://ng-learn-angular-b1d3a-default-rtdb.firebaseio.com/posts.json')
  }
}
