import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  constructor() {}

  @Input()
  maxRating = 5;
  @Input()
  selectedrate = 0;
  previousrate = 0;

  maxRatingArr: number[] = [];

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handlemouseenter(index: number) {
    this.selectedrate = index + 1;
  }

  handlemouseleave() {
    if (this.previousrate !== 0) {
      this.selectedrate = this.previousrate;
    } else {
      this.selectedrate = 0;
    }
  }

  rate(index: number) {
    this.selectedrate = index + 1;
    this.previousrate = this.selectedrate;
  }
}
