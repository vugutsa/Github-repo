import { Component } from '@angular/core';
import { GithubReposService } from './github-repos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github-repos';

  gitHubRepositories: any = [];
  constructor(private myServiceRepo: GithubReposService){}

  getRepositories(){
    this.myServiceRepo.getGithubPublicRepos().subscribe(repos => {
    this.gitHubRepositories = repos;
    });
  }
}
