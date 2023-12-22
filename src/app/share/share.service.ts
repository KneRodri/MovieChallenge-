import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIresponse, Movie } from '../models/models.component';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  
  private apiKey = 'bd2f3050b747335fd35c8ddd60f9bac8';
  private apiUrl = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<APIresponse> {
    return this.http.get<APIresponse>(`${this.apiUrl}movie/popular?api_key=${this.apiKey}`);
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}movie/movie_id${movieId}?api_key=${this.apiKey}`);
  }

}

  // getGenresList(): Observable<GenresList> {
  //   return this.http.get<GenresList>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`);
  // }