import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinateMap } from 'src/app/utilities/map/coordinateMap';
import {
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from '../movie-theater.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css'],
})
export class MovieTheaterFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Input()
  model!: movieTheatersDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  initialCoordinate: coordinateMap[] = [];

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', { validators: [Validators.required] }],
      latitude: ['', { validators: [Validators.required] }],
      longitude: ['', { validators: [Validators.required] }],
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
      this.initialCoordinate.push({
        latitude: this.model.latitude,
        longitude: this.model.longitude,
      });
    }
  }

  onSelectedLocation(coordinate: coordinateMap) {
    this.form.patchValue(coordinate);
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
