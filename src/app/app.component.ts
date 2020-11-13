import { Component } from '@angular/core';
import { GithubReposService } from './github-repos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github-repos';

  constructor(private myServiceRepo: GithubReposService){}
}
