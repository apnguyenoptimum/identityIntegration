import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInventoryPanelComponent } from './top-inventory-panel.component';

describe('TopInventoryPanelComponent', () => {
  let component: TopInventoryPanelComponent;
  let fixture: ComponentFixture<TopInventoryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopInventoryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopInventoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
