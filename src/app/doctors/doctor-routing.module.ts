import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultDoctorComponent } from './consult-doctor/consult-doctor.component';
import { ReferenceDoctorComponent } from './reference-doctor/reference-doctor.component';


const routes: Routes = [
  {
    path: 'consult-doctor',
    component: ConsultDoctorComponent
  },
  {
    path: 'reference-doctor',
    component: ReferenceDoctorComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
