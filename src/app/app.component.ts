import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTeathers = [
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99,
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-14'),
        price: 300.99,
      },
    ];

    this.moviesFutureRealses = [
      {
        title: 'Avengers',
        releaseDate: new Date('2020-12-05'),
        price: 584.99,
      },
      {
        title: 'Toy Story',
        releaseDate: new Date('2019-11-14'),
        price: 300.99,
      },
    ];
  }
  title = 'angular-moveis';

  moviesInTeathers!: { title: string; releaseDate: Date; price: number }[];
  moviesFutureRealses!: { title: string; releaseDate: Date; price: number }[];

  duplicatenumber(n: number) {
    return n * 2;
  }
}
