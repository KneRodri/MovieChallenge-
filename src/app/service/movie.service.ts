import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenresList, Movie } from '../share/interface/interface.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'b2e3dce9ab9bb2f7aee693c10129e44f';
  private apiUrl = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }

  getMovieDetails(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/movie/${movieId}?apiKey=${this.apiKey}`)
  } 

  getGenresList(): Observable<GenresList> {
    return this.http.get<GenresList>(`${this.apiUrl}/genre/movie/list?apiKey=${this.apiKey}`)
  }

  getMovieList(page: number, genreId: string, selectedSort: string): Observable<Movie[]> {
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('page', page)
      .set('with_genres', genreId)
      .set('sort_by', selectedSort);
      
    return this.http.get<any>(`${this.apiUrl}discover/movie`, { params });
  }
}
