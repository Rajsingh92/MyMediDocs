import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SettingsComponent } from './settings/settings.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'hardware',
    component: HardwareComponent
  },
  {
    path: 'settings',
    component:SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MstaffRoutingModule { }
