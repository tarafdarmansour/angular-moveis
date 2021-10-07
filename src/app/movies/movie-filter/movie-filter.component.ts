import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
})
export class MovieFilterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

  movies = [
    {
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 0,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 0,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Inception',
      releaseDate: new Date(),
      price: 0,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
    },
  ];

  originalMovies = this.movies;

  genres = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Action' },
  ];

  clearForm() {
    this.form.reset();
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcommingReleases: false,
      inTheaters: false,
    });

    this.form.valueChanges.subscribe((values) => {
      this.movies = this.originalMovies;
      this.filterMovies(values);
    });
  }

  filterMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(
        (movie) => movie.title.indexOf(values.title) !== -1
      );
    }
  }
}
