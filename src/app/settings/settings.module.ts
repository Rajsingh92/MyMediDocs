import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchMasterComponent } from './branch-master/branch-master.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { SettingsRoutingModule } from './settings-routing.module';



@NgModule({
  declarations: [
    BranchMasterComponent, 
    AddDepartmentComponent, 
    RoleMasterComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
