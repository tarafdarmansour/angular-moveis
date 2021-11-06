import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private actorsService: ActorsService,
    private router: Router
  ) {}

  model!: actorDTO;

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      this.actorsService
        .getById(params.id)
        .subscribe((actor) => (this.model = actor));
    });
  }

  saveChanges(actorCreationDTO: actorCreationDTO) {
    this.actorsService.edit(this.model.id, actorCreationDTO).subscribe(() => {
      this.router.navigate(['/actors']);
    });
  }
}
