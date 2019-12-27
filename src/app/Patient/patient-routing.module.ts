import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { DoctorPrescriptionComponent } from './doctor-prescription/doctor-prescription.component';
import { MedishopCartComponent } from './medishop-cart/medishop-cart.component';
import { TestHistoryComponent } from './test-history/test-history.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { MedirecordsComponent } from './medirecords/medirecords.component';




const routes: Routes = [
 {
   path:'',
   component: PatientDashboardComponent,
 },

{
  path:'book-appointment',
  component: BookAppointmentComponent
},
{
  path: 'doctor-prescription',
  component: DoctorPrescriptionComponent
},
{
  path:'medishop-cart',
  component:MedishopCartComponent
},
{
  path:'test-history',
  component:TestHistoryComponent
},
{
  path: 'view-appointment',
  component:ViewAppointmentComponent
},
{
  path : 'medirecords',
  component: MedirecordsComponent
}
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
  
})
export class PatientRoutingModule { }
