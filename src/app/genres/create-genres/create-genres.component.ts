import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUpperCase';

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
      name: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            firstLetterUppercase(),
          ],
        },
      ],
    });
  }
  saveChanges() {
    // .. save data
    this.router.navigate(['/genres']);
  }
  getErrorMessageFieldName() {
    const field = this.form.get('name');

    if (field?.hasError('required')) {
      return 'The field name is required.';
    }

    if (field?.hasError('minlength')) {
      return 'The minimum length is 3.';
    }

    if (field?.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }
}
