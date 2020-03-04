import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageNavComponent } from './master-page-nav.component';

describe('MasterPageNavComponent', () => {
  let component: MasterPageNavComponent;
  let fixture: ComponentFixture<MasterPageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
