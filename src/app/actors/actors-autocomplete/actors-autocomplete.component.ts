import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { actorAutoCompleteDTO } from '../actor.model';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css'],
})
export class ActorsAutocompleteComponent implements OnInit {
  constructor() {}

  control: FormControl = new FormControl();

  actors: actorAutoCompleteDTO[] = [
    {
      name: 'Tom Holland',
      picture:
        'https://www.biography.com/.image/t_share/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg',
    },
    {
      name: 'Tom Hanks',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_FMjpg_UX1000_.jpg',
    },
    {
      name: 'Samuel L. Jackson',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
  ];

  selectedActors: actorAutoCompleteDTO[] = [];

  originalActors = this.actors;

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(
        (actor) => actor.name.indexOf(value) !== -1
      );
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
  }
}
