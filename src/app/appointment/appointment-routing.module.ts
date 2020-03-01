import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ConfigureAppointmentComponent } from './configure-appointment/configure-appointment.component';
import { UpcomingAppointmentComponent } from './upcoming-appointment/upcoming-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

const routes: Routes = [
  {
    path: 'book-appointment',
    component: BookAppointmentComponent
  },
  {
    path: 'configure-appointment',
    component: ConfigureAppointmentComponent
  },
  {
    path: 'upcoming-appointment',
    component: UpcomingAppointmentComponent
  },
  {
    path: 'view-appointment',
    component: ViewAppointmentComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
