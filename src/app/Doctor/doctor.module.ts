import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DocListComponent } from './doc-list/doc-list.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    DocListComponent,
    DoctorDashboardComponent
  ],
  imports: [
    DoctorRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports: [
 
],
providers:[

]
})
export class DoctorModule { }
