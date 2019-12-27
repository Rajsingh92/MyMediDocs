
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentReportsComponent } from './appointment-reports/appointment-reports.component';
import { AddTimeslotComponent } from './add-timeslot/add-timeslot.component';
import { TimeslotReportsComponent } from './timeslot-reports/timeslot-reports.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { FeesReportsComponent } from './fees-reports/fees-reports.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { ScheduleReportsComponent } from './schedule-reports/schedule-reports.component';
import { AddTestsComponent } from './add-tests/add-tests.component';
import { TestsReportsComponent } from './tests-reports/tests-reports.component';
import { AddPatientTestComponent } from './add-patient-test/add-patient-test.component';
import { PatientTestReportsComponent } from './patient-test-reports/patient-test-reports.component';
import { AddPatientMedicineComponent } from './add-patient-medicine/add-patient-medicine.component';
import { PatientMedicineReportsComponent } from './patient-medicine-reports/patient-medicine-reports.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { PrescriptionReportsComponent } from './prescription-reports/prescription-reports.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientReportsComponent } from './patient-reports/patient-reports.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDruginfoComponent } from './add-druginfo/add-druginfo.component';




@NgModule({
  declarations: [
  AddAppointmentComponent,
  AppointmentReportsComponent,
  AddTimeslotComponent,
  TimeslotReportsComponent,
  AddFeesComponent,
  FeesReportsComponent,
  AddScheduleComponent,
  ScheduleReportsComponent,
  AddTestsComponent,
  TestsReportsComponent,
  AddPatientTestComponent,
  PatientTestReportsComponent,
  AddPatientMedicineComponent,
  PatientMedicineReportsComponent,
  AddPrescriptionComponent,
  PrescriptionReportsComponent,
  AddPatientComponent,
  PatientReportsComponent,
  AddUserComponent,
  UserReportsComponent,
  MyAccountComponent,
  AdminDashboardComponent,
  AddProductComponent,
  AddDruginfoComponent
],
  imports: [
    AdminRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
 
],
providers:[
  
]
})
export class AdminModule { }
