import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EmployeeEditComponent } from './test/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './test/employee-add/employee-add.component';
import { EmployeeGetComponent } from './test/employee-get/employee-get.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "doctors",
    loadChildren: "src/app/doctors/doctors.module#DoctorsModule"
  },
  {
    path: "manager",
    loadChildren: "src/app/manager/manager.module#ManagerModule"
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'product/create',
    component: EmployeeAddComponent,
    
  },
  {
    path: 'edit/:id',
    component: EmployeeEditComponent,
    
  },
  {
    path: 'products',
    component: EmployeeGetComponent,

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
