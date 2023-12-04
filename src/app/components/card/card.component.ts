import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../service/movie.service';
import { Router } from '@angular/router';
import { Movie } from '../../share/interface/interface.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() movie: Movie | undefined;

  currentPage: number = 1; 
  totalPages: number = 40596;
  page_size: number = 20;
  pages: number[] = [];
  pageSizeOptions = [20];
  selectedSort: string = '';
  filterOption: string = '';
  release_year: string = '';
  default_sort: string = 'popularity.desc';
  default_filter: string = '28';
  data: any = [];

  constructor(private router: Router) { }

    navigateToDetails(movieId: number) {
      this.router.navigate(['/app-movie-details', movieId]);
    }
 
}
