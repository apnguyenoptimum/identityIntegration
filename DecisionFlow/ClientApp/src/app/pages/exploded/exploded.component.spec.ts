import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplodedComponent } from './exploded.component';

describe('ExplodedComponent', () => {
  let component: ExplodedComponent;
  let fixture: ComponentFixture<ExplodedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplodedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplodedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
