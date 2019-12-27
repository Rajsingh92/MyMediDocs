import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddPatientMedicineComponent } from './add-patient-medicine/add-patient-medicine.component';
import { AddPatientTestComponent } from './add-patient-test/add-patient-test.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { AddTestsComponent } from './add-tests/add-tests.component';
import { AddTimeslotComponent } from './add-timeslot/add-timeslot.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FeesReportsComponent } from './fees-reports/fees-reports.component';
import { PatientReportsComponent } from './patient-reports/patient-reports.component';
import { PatientMedicineReportsComponent } from './patient-medicine-reports/patient-medicine-reports.component';
import { PatientTestReportsComponent } from './patient-test-reports/patient-test-reports.component';
import { PrescriptionReportsComponent } from './prescription-reports/prescription-reports.component';
import { ScheduleReportsComponent } from './schedule-reports/schedule-reports.component';
import { TestsReportsComponent } from './tests-reports/tests-reports.component';
import { TimeslotReportsComponent } from './timeslot-reports/timeslot-reports.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { AppointmentReportsComponent } from './appointment-reports/appointment-reports.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddDruginfoComponent } from './add-druginfo/add-druginfo.component';




const routes: Routes = [
    {
        path: '',
        component:AdminDashboardComponent
    },
    {
        path: 'add-appointment',
        component:AddAppointmentComponent
    },
    {
        path: 'appointment-reports',
        component:AppointmentReportsComponent
    },
    {
        path: 'add-fees',
        component:AddFeesComponent
    },
    {
        path: 'fees-reports',
        component:FeesReportsComponent
    },
    {
        path: 'add-patient',
        component:AddPatientComponent
    },
    {
        path: 'patient-reports',
        component:PatientReportsComponent
    },
    {
        path: 'add-patient-medicine',
        component:AddPatientMedicineComponent
    },
    {
        path: 'patient-medicine-reports',
        component:PatientMedicineReportsComponent
    },
    {
        path: 'add-patient-test',
        component:AddPatientTestComponent
    },
    {
        path: 'patient-test-reports',
        component:PatientTestReportsComponent
    },
    {
        path: 'add-prescription',
        component:AddPrescriptionComponent
    },
    {
        path: 'prescription-reports',
        component:PrescriptionReportsComponent
    },
    {
        path: 'add-schedule',
        component:AddScheduleComponent
    },
    {
        path: 'schedule-reports',
        component:ScheduleReportsComponent
    },
    {
        path: 'add-tests',
        component:AddTestsComponent
    },
    {
        path: 'tests-reports',
        component:TestsReportsComponent
    },
    {
        path: 'add-timeslot',
        component:AddTimeslotComponent
    },
    {
        path: 'timeslot-reports',
        component:TimeslotReportsComponent
    },
    {
        path: 'add-user',
        component:AddUserComponent
    },
    {
        path: 'user-reports',
        component:UserReportsComponent
    },
    {
        path: 'my-account',
        component:MyAccountComponent
    },
    {
        path: 'add-product',
        component: AddProductComponent
    },
    {
        path: 'add-druginfo',
        component: AddDruginfoComponent
    }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
  
})
export class AdminRoutingModule { }
