import { Injectable } from '@angular/core';
import { GitSearchUsers } from './git-search-users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchUsersService {

  cachedValues: Array<{
    [query: string]: GitSearchUsers
  }> = [];
  constructor(private http: HttpClient) { }

  gitSearchUsers = (query: string) => {
    const promise = new Promise<GitSearchUsers>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      } else {
        this.http.get('https://api.github.com/search/users?q=' + query).toPromise()
        .then((response) => {
          resolve(response as GitSearchUsers);
        }, (error) => {
          reject(error);
        });
      }
    });
    return promise;
  }
}
