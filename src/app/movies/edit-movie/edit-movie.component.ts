import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute) {}

  model: movieDTO = {
    inTheaters: true,
    releaseDate: new Date(),
    summary: 'Summary Text',
    title: 'Spider-Man',
    trailer: 'ABCD',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
  };

  ngOnInit(): void {
    this.activatedroute.params.subscribe((p) => {});
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {}
}
