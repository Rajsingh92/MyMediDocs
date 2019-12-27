import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslotReportsComponent } from './timeslot-reports.component';

describe('TimeslotReportsComponent', () => {
  let component: TimeslotReportsComponent;
  let fixture: ComponentFixture<TimeslotReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeslotReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeslotReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
