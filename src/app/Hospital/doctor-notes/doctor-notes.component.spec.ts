import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNotesComponent } from './doctor-notes.component';

describe('DoctorNotesComponent', () => {
  let component: DoctorNotesComponent;
  let fixture: ComponentFixture<DoctorNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
