import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddMstaffComponent } from './add-mstaff/add-mstaff.component';
import { AddNurseComponent } from './add-nurse/add-nurse.component';
import { AddRecComponent } from './add-rec/add-rec.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModifyComponent } from './modify/modify.component';
import { PComplaintComponent } from './p-complaint/p-complaint.component';
import { SettingsComponent } from './settings/settings.component';
import { StatsComponent } from './stats/stats.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddDoctorComponent, 
    AddMstaffComponent, 
    AddNurseComponent, 
    AddRecComponent, 
    ComplaintsComponent, 
    DashboardComponent, 
    ModifyComponent, 
    PComplaintComponent, 
    SettingsComponent, 
    StatsComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
