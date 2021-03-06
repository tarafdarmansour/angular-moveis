import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUpperCase';
import { genreCreationDTO } from '../genre.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genres',
  templateUrl: './create-genres.component.html',
  styleUrls: ['./create-genres.component.css'],
})
export class CreateGenresComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private genreService: GenresService) {}

  ngOnInit(): void {}
  saveChanges(genreCreationDTO: genreCreationDTO) {
    this.genreService.create(genreCreationDTO).subscribe(
      () => {
        this.router.navigate(['/genres']);
      },
      (err) => (this.errors = parseWebAPIErrors(err))
    );
  }
}
