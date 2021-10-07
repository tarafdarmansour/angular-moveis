import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO } from '../actor.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute) {}

  model: actorCreationDTO = { name: 'Tom Holand', dateOfBirth: new Date() };

  ngOnInit(): void {
    this.activatedroute.params.subscribe((p) => {});
  }

  saveChanges(actorCreationDTO: actorCreationDTO) {
    console.log(actorCreationDTO);
  }
}
