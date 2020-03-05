import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { BranchMasterComponent } from './branch-master/branch-master.component';
import { RoleMasterComponent } from './role-master/role-master.component';


const routes: Routes = [
  {
    path: 'add-department',
    component:AddDepartmentComponent
  },
  {
    path: 'branch-master',
    component: BranchMasterComponent
  },
  {
    path: 'role-master',
    component: RoleMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
