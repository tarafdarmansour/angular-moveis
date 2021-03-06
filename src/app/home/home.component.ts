import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.moviesInTeathers = [
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99,
        poster:
          'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-14'),
        price: 300.99,
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg',
      },
    ];

    this.moviesFutureRealses = [];
  }
  moviesInTeathers!: {
    title: string;
    releaseDate: Date;
    price: number;
    poster: string;
  }[];
  moviesFutureRealses!: {
    title: string;
    releaseDate: Date;
    price: number;
    poster: string;
  }[];
}
