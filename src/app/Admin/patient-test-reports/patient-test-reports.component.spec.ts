import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTestReportsComponent } from './patient-test-reports.component';

describe('PatientTestReportsComponent', () => {
  let component: PatientTestReportsComponent;
  let fixture: ComponentFixture<PatientTestReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTestReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTestReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
