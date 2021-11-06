import { Component, OnInit } from '@angular/core';
import { actorDTO } from '../actor.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css'],
})
export class IndexActorsComponent implements OnInit {
  constructor(private actorsService: ActorsService) {}

  actors!: actorDTO[];
  columnsToDisplay = ['name', 'actions'];

  ngOnInit(): void {
    this.actorsService.get().subscribe((response: actorDTO[]) => {
      this.actors = response;
    });
  }

  delete(id: number) {}
}
