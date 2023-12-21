import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  movies: any = [];
  currentPage: number = 1;
  pageSize: number = 18;
  pages: number[] = [];
  pageSizeOptions = [18];
  selectedSort: string = '';
  filterOption: string = '';
  release_year: string = '';
  default_sort: string = 'popularity.desc';
  default_filter: string = '28';
  data: any = [];

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.shareService.getPopularMovies().subscribe(resp => {
      this.movies = resp.total_results;
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.movies = resp.results.slice(startIndex, endIndex);

    });
  }


}
