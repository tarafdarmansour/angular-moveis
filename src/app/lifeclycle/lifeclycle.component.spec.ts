import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeclycleComponent } from './lifeclycle.component';

describe('LifeclycleComponent', () => {
  let component: LifeclycleComponent;
  let fixture: ComponentFixture<LifeclycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeclycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeclycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
