import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url= "http://localhost:3000/api/posts"
  posts: Post[] = [];
  postUpdated = new Subject<Post[]>();

  constructor(private router: Router, private http: HttpClient) {

  }
  addPost(post: Post){

    this.http.post<{message: String}>(this.url,post).subscribe((response) => {
      console.log(response);
      this.posts.push(post);
      //Generar notificacion de que se actualizo la lista Post
      this.postUpdated.next([...this.posts]);
      this.router.navigate(['/']);
    });
  }

  getPostsUpdateListener(){
    return this.postUpdated.asObservable();
  }

  getPosts(){
    this.http.get<Post[]>(this.url).subscribe((response)=>{
      console.log(response);
      this.posts = response;
      this.postUpdated.next([...this.posts]);
    });
  }
}
