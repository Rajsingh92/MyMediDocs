import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BillComponent } from './bill/bill.component';
import { CurrComponent } from './curr/curr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { NewpatientComponent } from './newpatient/newpatient.component';
import { PReportComponent } from './p-report/p-report.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';



const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'bill',
    component: BillComponent
  },
  {
    path:'curr',
    component: CurrComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'emergency',
    component: EmergencyComponent
  },
  {
    path: 'newpatient',
    component: NewpatientComponent
  },
  {
    path: 'p-report',
    component: PReportComponent
  },
  {
    path:'report',
    component: ReportComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
