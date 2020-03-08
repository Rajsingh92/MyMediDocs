import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { SettingComponent } from './setting/setting.component';
import { PReportComponent } from './p-report/p-report.component';


const routes: Routes = [
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'patients',
    component:PatientsComponent
  },
  {
    path:'settings',
    component:SettingComponent
  },
  {
    path:'p_reports',
    component: PReportComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
