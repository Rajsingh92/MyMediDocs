import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitorsComponent } from './patient-visitors.component';

describe('PatientVisitorsComponent', () => {
  let component: PatientVisitorsComponent;
  let fixture: ComponentFixture<PatientVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
