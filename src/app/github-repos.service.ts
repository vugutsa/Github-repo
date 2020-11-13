import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {


  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getGithubPublicRepos(){
  const username = 'vugutsa';
  return this.http.get(`https://api.github.com/users/$(username)/repos`);
  }
}
