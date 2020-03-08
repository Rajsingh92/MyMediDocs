import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { BillComponent } from './bill/bill.component';
import { CurrComponent } from './curr/curr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { NewpatientComponent } from './newpatient/newpatient.component';
import { PReportComponent } from './p-report/p-report.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { ReceptionistRoutingModule } from './receptionlist-routing.module';



@NgModule({
  declarations: [
    AdminComponent, 
    BillComponent, 
    CurrComponent, 
    DashboardComponent, 
    EmergencyComponent, 
    NewpatientComponent, 
    PReportComponent, 
    ReportComponent, 
    SettingComponent
  ],
  imports: [
    CommonModule,
    ReceptionistRoutingModule
  ]
})
export class ReceptionistModule { }
