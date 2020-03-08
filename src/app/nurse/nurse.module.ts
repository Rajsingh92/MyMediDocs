import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PReportComponent } from './p-report/p-report.component';
import { PatientsComponent } from './patients/patients.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [DashboardComponent, PReportComponent, PatientsComponent, SettingsComponent],
  imports: [
    CommonModule
  ]
})
export class NurseModule { }
