import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {
  nowPlaying: any[];
  popular: any[];
  popularAnimated: any[];

  constructor( private moviesService: MoviesService ) { }

  ngOnInit() {
    this.moviesService.getNowPlaying().subscribe( response => {
      this.nowPlaying = response.results;
    });

    this.moviesService.getPopular().subscribe( response => {
      this.popular = response.results;
    });

    this.moviesService.getPopularAnimated().subscribe( response => {
      this.popularAnimated = response.results;
    });
  }

}
