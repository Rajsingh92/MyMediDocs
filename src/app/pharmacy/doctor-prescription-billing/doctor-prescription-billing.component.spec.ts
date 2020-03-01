import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPrescriptionBillingComponent } from './doctor-prescription-billing.component';

describe('DoctorPrescriptionBillingComponent', () => {
  let component: DoctorPrescriptionBillingComponent;
  let fixture: ComponentFixture<DoctorPrescriptionBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPrescriptionBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPrescriptionBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
