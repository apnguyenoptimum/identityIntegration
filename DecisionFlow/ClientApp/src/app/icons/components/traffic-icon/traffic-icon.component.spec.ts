import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficIconComponent } from './traffic-icon.component';

describe('TrafficIconComponent', () => {
  let component: TrafficIconComponent;
  let fixture: ComponentFixture<TrafficIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
