import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubServiceService {
  githubUrl: String = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUserDetails(userName: String) {
    return this.http.get(`${this.githubUrl}/userName`);
  }

  getRepos(repoUrl) {
    return this.http.get(repoUrl);
  }
}
