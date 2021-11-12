import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePostComponent} from './create-post/create-post.component';
import { PostListComponent } from './post-list/post-list.component';

// Aqui se adicionan nuevas rutas con el componente asociado
const routes: Routes = [
  {path: '', component:PostListComponent},
  {path: 'add', component:CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
