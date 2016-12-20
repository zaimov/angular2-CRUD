import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { User } from './users/user.model';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form.component';
import { Post } from './posts/post.model';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './shared/spinner.component';
import { PaginationComponent } from './pagination.component';

import { usersRouting } from './users/users.routing';
import { postsRouting } from './posts/posts.routing';
import { routing } from './app.routing';

import { UserService } from './users/user.service';
import { UserFormGuard } from './users/user-form.guard';
import { PostService }   from './posts/post.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    UserFormComponent,
    NotFoundComponent,
    SpinnerComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    usersRouting,
    postsRouting,
    routing
  ],
  providers: [
    UserService,
    UserFormGuard,
    PostService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
