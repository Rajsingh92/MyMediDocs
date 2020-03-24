import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddMstaffComponent } from './add-mstaff/add-mstaff.component';
import { AddNurseComponent } from './add-nurse/add-nurse.component';
import { AddRecComponent } from './add-rec/add-rec.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PComplaintComponent } from './p-complaint/p-complaint.component';
import { SettingsComponent } from './settings/settings.component';
import { StatsComponent } from './stats/stats.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { MsatffEditComponent } from './msatff-edit/msatff-edit.component';
import { NurseEditComponent } from './nurse-edit/nurse-edit.component';
import { RecEditComponent } from './rec-edit/rec-edit.component';



const routes: Routes = [
  {
    path:'add-doctor',
    component: AddDoctorComponent
  },
  {
    path:'add-mstaff',
    component:AddMstaffComponent
  },
  {
    path:'add-nurse',
    component: AddNurseComponent
  },
  {
    path:'add-rec',
    component: AddRecComponent
  },
  {
    path: 'edit-doctor',
    component:DoctorEditComponent
  },
  {
    path:'edit-mstaff',
    component:MsatffEditComponent
  },
  {
    path: 'edit-nurse',
    component: NurseEditComponent
  },
  {
    path:'edit-rec',
    component: RecEditComponent
  },
  {
    path:'complaints',
    component:ComplaintsComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
 
  {
    path:'p-complaint',
    component: PComplaintComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  },
  {
    path:'stats',
    component:StatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
