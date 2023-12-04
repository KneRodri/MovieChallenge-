import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { MovieService } from '../../service/movie.service';
import { CardComponent } from '../../components/card/card.component';
import { Movie } from '../../share/interface/interface.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ButtonsComponent, CardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    const page = 1;
    const genreId = 'horror';
    const selectedSort = 'popularity.desc';

    this.movieService.getMovieList(page, genreId, selectedSort).subscribe((resp) => {
      this.movies = resp;
      console.log(this.movies);
    });
  }
}