import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genres',
  templateUrl: './create-genres.component.html',
  styleUrls: ['./create-genres.component.css'],
})
export class CreateGenresComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
    });
  }
  saveChanges() {
    // .. save data
    this.router.navigate(['/genres']);
  }
}
