import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientConsultationComponent } from './patient-consultation/patient-consultation.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PrescriptionComponent } from './prescription/prescription.component';



const routes: Routes = [
  {
    path:'patient-consultation',
    component:PatientConsultationComponent
  },
  {
    path: 'patient-registration',
    component: PatientRegistrationComponent
  },
  {
    path: 'prescription',
    component: PrescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
