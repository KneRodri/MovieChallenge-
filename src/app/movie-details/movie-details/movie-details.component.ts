import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share/share.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: number = 0;
  title: string = '';
  vote_count: number = 70;
  releaseYear: string = '';
  genres: any = {};
  details: any = {};
  img_url: string = 'https://image.tmdb.org/t/p/w500/';
  backdrop_img: string = '';
  genresStrings: any = [];
  movieGenres: any[] = [];

  constructor(
    private shareService: ShareService,
  ) { }

  ngOnInit(): void {
  }

}
