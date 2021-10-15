import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO } from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css'],
})
export class EditMovieTheaterComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute) {}

  model: movieTheatersCreationDTO = { name: 'Agora' };
  ngOnInit(): void {
    this.activatedroute.params.subscribe((p) => {});
  }

  saveChanges(movieTheater: movieTheatersCreationDTO) {}
}
