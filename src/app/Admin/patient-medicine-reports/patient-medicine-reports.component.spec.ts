import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicineReportsComponent } from './patient-medicine-reports.component';

describe('PatientMedicineReportsComponent', () => {
  let component: PatientMedicineReportsComponent;
  let fixture: ComponentFixture<PatientMedicineReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMedicineReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMedicineReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
