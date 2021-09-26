import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.movies = [
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
    }, 4000);
  }

  title = 'angular-moveis';

  movies!: { title: string; releaseDate: Date; price: number }[];

  duplicatenumber(n: number) {
    return n * 2;
  }
}
