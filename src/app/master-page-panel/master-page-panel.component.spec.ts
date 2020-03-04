import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPagePanelComponent } from './master-page-panel.component';

describe('MasterPagePanelComponent', () => {
  let component: MasterPagePanelComponent;
  let fixture: ComponentFixture<MasterPagePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPagePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
