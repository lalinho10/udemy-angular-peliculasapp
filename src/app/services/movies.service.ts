import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private language = 'es-MX';

  private api_url: string = environment.TMDb.APIurl;
  private api_key: string = environment.TMDb.APIkey;

  constructor( private http: HttpClient ) {}

  private getURL( request: string, params?: string[] ): string {
    let stgParams = '';
    const commonUrl = `${this.api_url}${request}api_key=${this.api_key}&language=${this.language}`;

    if ( params && params.length > 0 ) {
      stgParams = `&${params.join( '&' )}`;
    }

    return `${commonUrl}${stgParams}`;
  }

  getMovieGenres() {
    const request = '/genre/movie/list?';
    const url = this.getURL( request );
    this.http.jsonp( url, 'callback=JSONP_CALLBACK' ).subscribe( data => console.log( data ) );
  }

  getNowPlaying(): Observable<any> {
    const request = '/movie/now_playing?';
    const params = [ 'page=1', 'region=MX' ];
    const url = this.getURL( request, params );
    return this.http.jsonp( url, 'callback=JSONP_CALLBACK' );
  }

  getPopular(): Observable<any> {
    const request = '/movie/popular?';
    const params = [ 'page=1', 'region=MX' ];
    const url = this.getURL( request, params );
    return this.http.jsonp( url, 'callback=JSONP_CALLBACK' );
  }

  getPopularAnimated(): Observable<any> {
    const request = '/discover/movie?';
    const params = [ 'sort_by=popularity.desc', 'include_adult=false', 'include_video=false', 'page=1', 'with_genres=16' ];
    const url = this.getURL( request, params );
    return this.http.jsonp( url, 'callback=JSONP_CALLBACK' );
  }

  getDetalil( movie_id: number ): Observable<any> {
    const request = `/movie/${movie_id}?`;
    const url = this.getURL( request );
    return this.http.jsonp( url, 'callback=JSONP_CALLBACK' );
  }

  getBySearch( query: string ): Observable<any> {
    const request = '/search/movie?';
    const params = [ `query=${query}`, 'page=1', 'include_adult=false' ];
    const url = this.getURL( request, params );
    return this.http.jsonp( url, 'callback=JSONP_CALLBACK' );
  }
}
