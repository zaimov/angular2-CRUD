import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { User } from '../users/user.model'; 
import { UserService } from '../users/user.service';
import { SpinnerComponent } from '../shared/spinner.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  private posts: Post[] = [];
  public pagedPosts = [];
  private users: User[] = [];
  public postsLoading;
  public commentsLoading = true;
  public currentPost: Post;
  pageSize = 10;

  constructor(
    private postService: PostService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.loadUsers();
    this.loadPosts();
  }

  private loadPosts(filter?) {
    this.postsLoading = true;

    this.postService.getPosts(filter)
      .subscribe(
        (posts: Post[]) => {
          this.postsLoading = false;
          this.posts = posts;
          this.pagedPosts = this.getPostsInPage(1);
        }
      );
  }

  public onPageChanged(page) {
    this.pagedPosts = this.getPostsInPage(page);
  }

  private getPostsInPage(page) {
    var result = [];
    var startingIndex = (page - 1) * this.pageSize;
    var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

     for (var i = startingIndex; i < endIndex; i++) {
      result.push(this.posts[i]);
    }
    return result;
  }

  private reloadPosts(filter) {
    this.currentPost = null;

    this.loadPosts(filter);
  }

  private loadUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  public select(post: Post) {
    this.currentPost = post;

    this.postService.getComments(post.id)
      .subscribe(comments => {
        this.currentPost.comments = comments,
        this.commentsLoading = false
      });
  }

}
