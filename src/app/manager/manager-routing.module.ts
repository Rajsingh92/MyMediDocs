import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path:'complaints',
    component:ComplaintsComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'modify',
    component:ModifyComponent
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
