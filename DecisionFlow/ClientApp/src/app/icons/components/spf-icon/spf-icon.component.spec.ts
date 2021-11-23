import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpfIconComponent } from './spf-icon.component';

describe('SpfIconComponent', () => {
  let component: SpfIconComponent;
  let fixture: ComponentFixture<SpfIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpfIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpfIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
