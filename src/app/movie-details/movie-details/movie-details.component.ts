import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share/share.service';
import { ActivatedRoute } from '@angular/router';

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
  imgs_url: string = 'https://image.tmdb.org/t/p/w500/';
  backdrop_img: string = '';
  genresStrings: any = [];
  movieGenres: any[] = [];

  constructor(
    private shareService: ShareService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDetailsById();
  }

  private getDetailsById(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id, 'hola id');
      this.fillDetails(this.id);
    });
  }

  fillDetails(movieId: number) {
    this.shareService.getMovieDetails(movieId).subscribe(data => {
      console.log(data, 'hola data');
      this.details = data;
      console.log(this.details.genres, 'Hola generos');
      this.movieGenres = this.details.genres
    })
  }

  getBackdropImage() {
    if (this.details) {
      return this.imgs_url + this.details.backdrop_path;
    }
    return '';
  }
}

