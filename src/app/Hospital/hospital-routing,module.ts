import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalDashboardComponent } from './hospital-dashboard/hospital-dashboard.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AppointmentReportsComponent } from './appointment-reports/appointment-reports.component';
import { DoctorReportsComponent } from './doctor-reports/doctor-reports.component';
import { MyAccountComponent } from './my-account/my-account.component';



const routes: Routes = [
 {
   path:'',
   component: HospitalDashboardComponent,
 },

{
  path:'add-appointmnet',
  component:AddAppointmentComponent
},

{
  path: 'add-doctor',
  component:AddDoctorComponent
},
{
  path: 'appointment-reports',
  component:AppointmentReportsComponent
},
{
  path: 'doctor-reports',
  component:DoctorReportsComponent
},
{
  path:'my-account',
  component:MyAccountComponent
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
export class HospitalRoutingModule { }
