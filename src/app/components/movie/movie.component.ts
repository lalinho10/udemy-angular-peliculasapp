import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})

export class MovieComponent implements OnInit {
  movie: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( data => {
      this.getMovie( data[ 'movie_id' ] );
    });
  }

  getMovie( movie_id: number ): void {
    this.moviesService.getDetalil( movie_id ).subscribe( movie => {
      this.movie = movie;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
