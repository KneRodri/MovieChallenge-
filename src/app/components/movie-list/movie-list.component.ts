import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIresponse, Movie } from '../../share/interface/interface.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  @Input () objectAPI: APIresponse = {
    page: 1,
    results: [],
    total_pages: 100,
    total_results: 100,
  }
  @Input() movie: Movie = {
    adult: true,
    backdrop_path: 'example',
    genre_ids: [],
    id: 0,
    original_language: 'English',
    original_title: 'Doctor Sleep',
    overview: 'example',
    popularity: 7,
    poster_path: '',
    release_date: '31Octubre2019',
    title: 'Doctor Sleep',
    video: false,
    vote_average: 6.3,
    vote_count: 6.3,
  }
}
