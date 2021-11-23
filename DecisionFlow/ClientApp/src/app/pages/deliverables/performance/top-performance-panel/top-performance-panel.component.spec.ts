import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPerformancePanelComponent } from './top-performance-panel.component';

describe('TopPerformancePanelComponent', () => {
  let component: TopPerformancePanelComponent;
  let fixture: ComponentFixture<TopPerformancePanelComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPerformancePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPerformancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
