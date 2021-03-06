import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreationDTO, actorDTO } from '../actor.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css'],
})
export class FormActorComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

  @Output()
  onSaveChanges = new EventEmitter<actorCreationDTO>();

  @Input()
  model!: actorDTO;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      dateOfBirth: '',
      picture: '',
      biography: '',
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  changeMarkdown(content: any) {
    this.form.get('biography')?.setValue(content);
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  OnImageSelected(image: any) {
    this.form.get('picture')?.setValue(image);
  }
}
