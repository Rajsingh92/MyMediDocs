import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { HospitalRoutingModule } from './hospital-routing,module';
import { HospitalDashboardComponent } from './hospital-dashboard/hospital-dashboard.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentReportsComponent } from './appointment-reports/appointment-reports.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DoctorReportsComponent } from './doctor-reports/doctor-reports.component';
import { MyAccountComponent } from './my-account/my-account.component';



@NgModule({
  declarations: [
    HospitalDashboardComponent,
    AddAppointmentComponent,
    AppointmentReportsComponent,
    AddDoctorComponent,
    DoctorReportsComponent,
    MyAccountComponent
  ],
  imports: [
    HospitalRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports: [
 
],
providers:[

]
})
export class HospitalModule { }
