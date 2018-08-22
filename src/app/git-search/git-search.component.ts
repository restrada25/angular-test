import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  pageNumber: number;
  title: string;
  displayQuery: string;
  constructor(
    private gitSearchService: GitSearchService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.pageNumber = parseInt(params.get('pageNumber'), 10);
      if (isNaN(this.pageNumber)) {
        this.pageNumber = 1;
      }
      this.gitSearch();
    });
    this.route.data.subscribe((result) => {
      this.title = result.title;
    });
  }

  gitSearch = () => {
    this.gitSearchService.gitSearch(this.searchQuery, this.pageNumber).then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert('Error: ' + error.statusText);
    });
  }

  sendQuery = () => {
    this.searchResults = null;
    this.router.navigate(['/search/' + this.searchQuery + '/' + this.pageNumber]);
  }

  // newSearch = () => {
  //   this.pageNumber = 1;
  //   this.sendQuery();
  // }

  nextPage = () => {
    this.pageNumber ++;
    this.sendQuery();
  }

  previousPage = () => {
    this.pageNumber --;
    this.sendQuery();
  }
}
