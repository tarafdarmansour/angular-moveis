import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genres',
  templateUrl: './create-genres.component.html',
  styleUrls: ['./create-genres.component.css'],
})
export class CreateGenresComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  saveChanges() {
    // .. save data
    this.router.navigate(['/genres']);
  }
}
