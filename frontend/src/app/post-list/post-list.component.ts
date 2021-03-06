import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSub: Subscription;

  constructor(public postService: PostService) {
    this.postsSub = this.postService.getPostsUpdateListener().subscribe((posts: Post[]) => {
      this.posts=posts;
    });
   }

  ngOnInit(): void {
    this.postService.getPosts();
    this.postsSub = this.postService
    .getPostsUpdateListener()
    .subscribe((posts: Post[]) => {this.posts = posts;})
  }

  ngOnDestroy(): void{
    this.postsSub.unsubscribe();
  }
}

