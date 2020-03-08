import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { PatientsComponent } from './patients/patients.component';
import { PReportComponent } from './p-report/p-report.component';



@NgModule({
  declarations: [
    AppointmentComponent,
    DashboardComponent,
    SettingComponent,
    PatientsComponent,
    PReportComponent,
    
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorsModule { }
