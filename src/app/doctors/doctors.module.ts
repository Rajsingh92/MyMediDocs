import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultDoctorComponent } from './consult-doctor/consult-doctor.component';
import { ReferenceDoctorComponent } from './reference-doctor/reference-doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';



@NgModule({
  declarations: [
    ConsultDoctorComponent, 
    ReferenceDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorsModule { }
