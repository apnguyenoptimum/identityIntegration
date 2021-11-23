import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfLogoComponent } from './df-logo.component';

describe('DfLogoComponent', () => {
  let component: DfLogoComponent;
  let fixture: ComponentFixture<DfLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
