import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SettingsComponent } from './settings/settings.component';
import { MstaffRoutingModule } from './mstaff-routing.module';



@NgModule({
  declarations: [
    DashboardComponent, 
    HardwareComponent, 
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MstaffRoutingModule
  ]
})
export class MstaffModule { }
