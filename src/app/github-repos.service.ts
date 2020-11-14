import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {


  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getGithubPublicRepos(){
  const username = 'vugutsa';
  return this.http.get(`https://api.github.com/users/${username}/repos?access_token=834cb838e1347993561ef3c9f4edd04d921ee1ed`);
  }
}
