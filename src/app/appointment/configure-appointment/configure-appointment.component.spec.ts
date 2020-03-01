import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureAppointmentComponent } from './configure-appointment.component';

describe('ConfigureAppointmentComponent', () => {
  let component: ConfigureAppointmentComponent;
  let fixture: ComponentFixture<ConfigureAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
