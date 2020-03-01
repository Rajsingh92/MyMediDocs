import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientConsultationComponent } from './patient-consultation/patient-consultation.component';
import { PrescriptionComponent } from './prescription/prescription.component';



@NgModule({
  declarations: [PatientRegistrationComponent, PatientConsultationComponent, PrescriptionComponent],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }
