import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';

import { UsersModule }        from './users/users.module';
import { PostsModule }        from './posts/posts.module';
import { SharedModule }       from './shared/shared.module';

import { AppComponent }       from './app.component';
import { HomeComponent }      from './home/home.component';
import { HeaderComponent }    from './header.component';
import { NotFoundComponent }  from './not-found/not-found.component';

import { usersRouting }       from './users/users.routing';
import { postsRouting }       from './posts/posts.routing';
import { routing }            from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    PostsModule,
    SharedModule,
    usersRouting,
    postsRouting,
    routing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
