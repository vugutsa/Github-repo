import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubReposService } from './github-repos.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Github-repos';

  gitHubRepositories: any = [];
  mySubs: Subscription;
  constructor(private myServiceRepo: GithubReposService){
  this.getRepositories();
  }
  ngOnDestroy(): void {
   this.mySubs.unsubscribe();
  }
  ngOnInit(): void {
    this.getRepositories();
  }
  getRepositories(){
    this.myServiceRepo.getGithubPublicRepos().subscribe(repos => {
    this.gitHubRepositories = repos;
    console.log(JSON.stringify(repos));
    });
  }
}
