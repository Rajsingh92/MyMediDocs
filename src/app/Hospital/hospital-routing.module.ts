import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BedNumberComponent } from './bed-number/bed-number.component';
import { BedTransferComponent } from './bed-transfer/bed-transfer.component';
import { DischargeSummaryComponent } from './discharge-summary/discharge-summary.component';
import { DoctorNotesComponent } from './doctor-notes/doctor-notes.component';
import { NurseNotesComponent } from './nurse-notes/nurse-notes.component';
import { PatientAdmissionComponent } from './patient-admission/patient-admission.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { PatientVisitorsComponent } from './patient-visitors/patient-visitors.component';
import { RoomNumberComponent } from './room-number/room-number.component';
import { WardNumberComponent } from './ward-number/ward-number.component';
import { WardTypeComponent } from './ward-type/ward-type.component';



const routes: Routes = [
  {
    path:'bed-number',
    component:BedNumberComponent
  },
  {
    path:'bed-transfer',
    component:BedTransferComponent
  },
  {
    path:'discharge-summary',
    component: DischargeSummaryComponent
  },
  {
    path:'doctor-notes',
    component:DoctorNotesComponent
  },
  {
    path:'nurse-notes',
    component:NurseNotesComponent
  },
  {
    path:'patient-admission',
    component:PatientAdmissionComponent
  },
  {
    path:'patient-history',
    component:PatientHistoryComponent
  },
  {
    path:'patient-visitors',
    component:PatientVisitorsComponent
  },
  {
    path:'room-number',
    component:RoomNumberComponent
  },
  {
    path:'ward-number',
    component:WardNumberComponent
  },
  {
    path:'ward-type',
    component:WardTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
