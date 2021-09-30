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

    this.moviesFutureRealses = [];
  }

  display: boolean = true;

  title: string = 'angular-moveis';

  moviesInTeathers!: { title: string; releaseDate: Date; price: number }[];
  moviesFutureRealses!: { title: string; releaseDate: Date; price: number }[];

  duplicatenumber(n: number) {
    return n * 2;
  }

  handleRating(rate: number) {
    alert(`User Selecte ${rate}`);
  }
}
