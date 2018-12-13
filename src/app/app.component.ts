import { Component } from '@angular/core';

import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private moviesService: MoviesService ) {
    // this.moviesService.getMovieGenres();
    // this.moviesService.getPopular();
    // this.moviesService.getNowPlaying();
    // this.moviesService.getDetalil( 587 );
    // this.moviesService.getBySearch( 'Venom' );
    // this.moviesService.getPopularAnimated();
  }
}
