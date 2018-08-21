import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitSearchUsersService } from './git-search-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
    // this.GitSearchUsersService.gitSearchUsers('tom').then((response) => {
    //   alert("Total Users Found: "+response.total_count);
    // }, (error) => {
    //   alert("Error: "+error.statusText)
    // })
  }
}
