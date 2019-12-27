import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientMedicineComponent } from './add-patient-medicine.component';

describe('AddPatientMedicineComponent', () => {
  let component: AddPatientMedicineComponent;
  let fixture: ComponentFixture<AddPatientMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatientMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
