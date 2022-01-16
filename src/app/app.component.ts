import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from "./post.model";
import {PostsServise} from "./posts.servise";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsServise: PostsServise) {}

  ngOnInit() {
    // this.errorSub = this.postsServise.error._subscribe(errorMessage => {
    //   this.error = errorMessage;
      // return '';
    // })
    this.isFetching = true;
    this.postsServise.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
      }, error =>  {
      this.error = error.message;
    })
  }

  onCreatePost(postData: Post) {
    this.postsServise.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsServise.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error =>  {
      this.error = error.message;
    })
  }

  onClearPosts() {
   this.postsServise.deletePosts().subscribe(() =>
   this.loadedPosts = [])
  }
}
