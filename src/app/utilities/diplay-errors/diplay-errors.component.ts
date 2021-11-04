import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diplay-errors',
  templateUrl: './diplay-errors.component.html',
  styleUrls: ['./diplay-errors.component.css'],
})
export class DiplayErrorsComponent implements OnInit {
  @Input()
  errors: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
