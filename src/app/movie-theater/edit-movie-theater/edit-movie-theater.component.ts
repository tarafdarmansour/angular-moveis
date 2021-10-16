import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css'],
})
export class EditMovieTheaterComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute) {}

  model: movieTheatersDTO = {
    name: 'Agora',
    latitude: 35.69472206069354,
    longitude: 51.412307739519754,
  };
  ngOnInit(): void {
    this.activatedroute.params.subscribe((p) => {});
  }

  saveChanges(movieTheater: movieTheatersCreationDTO) {}
}
