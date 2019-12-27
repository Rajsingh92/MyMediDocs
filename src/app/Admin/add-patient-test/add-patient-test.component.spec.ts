import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientTestComponent } from './add-patient-test.component';

describe('AddPatientTestComponent', () => {
  let component: AddPatientTestComponent;
  let fixture: ComponentFixture<AddPatientTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatientTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
