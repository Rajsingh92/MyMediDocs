import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { TestHistoryComponent } from './test-history/test-history.component';
import { DoctorPrescriptionComponent } from './doctor-prescription/doctor-prescription.component';
import { MedishopCartComponent } from './medishop-cart/medishop-cart.component';
import { MedirecordsComponent } from './medirecords/medirecords.component';
import {FileUploadModule} from 'ng2-file-upload';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    PatientDashboardComponent,
    BookAppointmentComponent,
    ViewAppointmentComponent,
    TestHistoryComponent,
    DoctorPrescriptionComponent,
    MedishopCartComponent,
    MedirecordsComponent
  ],
  imports: [
    PatientRoutingModule,
    SharedModule,
    CommonModule,
    FileUploadModule,
    HttpClientModule,
    
  ],
  exports: [
 
],
providers:[
]
})
export class PatientModule { }
