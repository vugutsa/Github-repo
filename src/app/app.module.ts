import { GithubReposService } from './github-repos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from "@angular/common/http";
// import { GithubFormComponent } from './github-form/github-form.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    // GithubFormComponent,
    GithubReposComponent,
    GithubFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
