import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopExplodedPanelComponent } from './top-exploded-panel.component';

describe('TopExplodedPanelComponent', () => {
  let component: TopExplodedPanelComponent;
  let fixture: ComponentFixture<TopExplodedPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopExplodedPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopExplodedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
