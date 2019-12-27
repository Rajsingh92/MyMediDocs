import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';





const routes: Routes = [
  {
    path: '',
    component: DoctorDashboardComponent
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
export class DoctorRoutingModule { }
