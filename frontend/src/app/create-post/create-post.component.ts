import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';


// aqui se relaciona el selector con la ruta del template para que pueda ser llamado desde app.component.html
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  content: String = "Hola a todos";
  texto: String = "";
  posts: Post[] = [];
  error = "Este campo es requerido";

  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }

  showText(){
    this.content = this.texto
  }

  addPost(form:NgForm){
    if (form.valid){
    this.postService.addPost(form.value);
    form.resetForm();
   }
  }
  getError(){return this.error}
}
