import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actor.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute) {}

  model: actorDTO = {
    name: 'Tom Holand',
    dateOfBirth: new Date(),
    biography: 'default value',
    picture:
      'https://m.media-amazon.com/images/M/MV5BMGQ5YTZhNjItNmMyOS00ZTNmLTlkODktM2FiZjA4NWVlMmRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
  };

  ngOnInit(): void {
    this.activatedroute.params.subscribe((p) => {});
  }

  saveChanges(actorCreationDTO: actorCreationDTO) {
    console.log(actorCreationDTO);
  }
}
