import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigureAppointmentComponent } from './configure-appointment/configure-appointment.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { UpcomingAppointmentComponent } from './upcoming-appointment/upcoming-appointment.component';
import { AppointmentRoutingModule } from './appointment-routing.module';



@NgModule({
  declarations: [
    ConfigureAppointmentComponent,
    BookAppointmentComponent,
    ViewAppointmentComponent,
    UpcomingAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
