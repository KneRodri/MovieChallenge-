import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  movies: any = [];
  currentPage: number = 40596;
  page_size: number = 20;
  pages: number[] = [];
  pageSizeOptions = [20];
  selectedSort: string = '';
  filterOption: string = '';
  release_year: string = '';
  default_sort: string = 'popularity.desc';
  default_filter: string = '28';
  data: any = [];

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.shareService.getPopularMovies().subscribe(resp => {
      this.movies = resp.results;
    });
  }

}
