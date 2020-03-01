import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WardTypeComponent } from './ward-type/ward-type.component';
import { WardNumberComponent } from './ward-number/ward-number.component';
import { RoomNumberComponent } from './room-number/room-number.component';
import { BedNumberComponent } from './bed-number/bed-number.component';
import { PatientAdmissionComponent } from './patient-admission/patient-admission.component';
import { BedTransferComponent } from './bed-transfer/bed-transfer.component';
import { DoctorNotesComponent } from './doctor-notes/doctor-notes.component';
import { NurseNotesComponent } from './nurse-notes/nurse-notes.component';
import { PatientVisitorsComponent } from './patient-visitors/patient-visitors.component';
import { DischargeSummaryComponent } from './discharge-summary/discharge-summary.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';



@NgModule({
  declarations: [
    WardTypeComponent, 
    WardNumberComponent, 
    RoomNumberComponent, 
    BedNumberComponent, 
    PatientAdmissionComponent, 
    BedTransferComponent, 
    DoctorNotesComponent, 
    NurseNotesComponent, 
    PatientVisitorsComponent, 
    DischargeSummaryComponent, 
    PatientHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HospitalModule { }
