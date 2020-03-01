import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDoctorComponent } from './reference-doctor.component';

describe('ReferenceDoctorComponent', () => {
  let component: ReferenceDoctorComponent;
  let fixture: ComponentFixture<ReferenceDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
