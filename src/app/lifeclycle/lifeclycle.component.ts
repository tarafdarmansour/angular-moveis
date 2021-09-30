import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';

@Component({
  selector: 'app-lifeclycle',
  templateUrl: './lifeclycle.component.html',
  styleUrls: ['./lifeclycle.component.css'],
})
export class LifeclycleComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit
{
  @Input()
  title: string = '';

  @ViewChild(RatingComponent)
  rating: RatingComponent = new RatingComponent();

  timer!: ReturnType<typeof setInterval>;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.rating);
    this.timer = setInterval(() => console.log(new Date()), 1000);
  }
}
