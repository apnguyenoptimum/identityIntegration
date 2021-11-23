import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplodedIconComponent } from './exploded-icon.component';

describe('ExplodedIconComponent', () => {
  let component: ExplodedIconComponent;
  let fixture: ComponentFixture<ExplodedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplodedIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplodedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
