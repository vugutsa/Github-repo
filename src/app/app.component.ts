import { Component, OnInit } from '@angular/core';
import { GithubReposService } from './github-repos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Github-repos';

  gitHubRepositories: any = [];
  constructor(private myServiceRepo: GithubReposService){
  this.getRepositories();
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
