import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpfPanelComponent } from './top-spf-panel.component';

describe('TopSpfPanelComponent', () => {
  let component: TopSpfPanelComponent;
  let fixture: ComponentFixture<TopSpfPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSpfPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSpfPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
