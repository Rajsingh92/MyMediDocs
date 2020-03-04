import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "src/app/home/home.module#HomeModule"
  },
  {
    path: "appointment",
    loadChildren: "src/app/appointment/appointment.module#AppointmentModule"
  },
  {
    path: "billing",
    loadChildren: "src/app/billing/billing.module#BillingModule"
  },
  {
    path: "doctors",
    loadChildren: "src/app/doctors/doctors.module#DoctorsModule"
  },
  {
    path: "expense",
    loadChildren: "src/app/expense/expense.module#ExpenseModule"
  },
  {
    path: "hospital",
    loadChildren: "src/app/hospital/hospital.module#HospitalModule"
  },
  // {
  //   path: "laboratory",
  //   loadChildren: "src/app/laboratory/laboratory.module#LaboratoryModule"
  // },
  // {
  //   path: "operation",
  //   loadChildren: "src/app/operation/operation.module#OperationModule"
  // },
  // {
  //   path: "patient",
  //   loadChildren: "src/app/patient/patient.module#PatientModule"
  // },
  // // {
  // //   path: "operation",
  // //   loadChildren: "src/app/operation/operation.module#PharmacyModule"
  // // },
  // {
  //   path: "reports",
  //   loadChildren: "src/app/reports/reports.module#ReportsModule"
  // },
  // {
  //   path: "settings",
  //   loadChildren: "src/app/settings/settings.module#SettingsModule"
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
