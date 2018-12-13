import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})

export class SearchComponent implements OnInit {
  searching = false;
  hasResults = true;
  query: string;
  searchResult: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      if ( params[ 'query' ] ) {
        this.query = params[ 'query' ];
        this.search();
      }
    });
  }

  search(): void {
    if ( this.query.length === 0 ) {
      return;
    }

    this.searching = true;
    this.hasResults = true;

    this.moviesService.getBySearch( this.query ).subscribe( response => {
      this.hasResults = response.total_results > 0;
      this.searchResult = response.results;
      this.searching = false;
    });

    this.query = '';
  }

}
