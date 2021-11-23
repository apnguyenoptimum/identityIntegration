import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverablesIconComponent } from './deliverables-icon.component';

describe('DeliverablesIconComponent', () => {
  let component: DeliverablesIconComponent;
  let fixture: ComponentFixture<DeliverablesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverablesIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverablesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
