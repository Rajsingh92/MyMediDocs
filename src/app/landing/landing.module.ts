import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplainComponent } from './complain/complain.component';
import { HomeComponent } from './home/home.component';
import { LandingRoutingModule } from './landing-routing.module';



@NgModule({
  declarations: [
    ComplainComponent, 
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
