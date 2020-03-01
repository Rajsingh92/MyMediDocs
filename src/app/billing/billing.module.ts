import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpdBillingComponent } from './opd-billing/opd-billing.component';
import { IpdBillingComponent } from './ipd-billing/ipd-billing.component';
import { BillingRoutingModule } from './billing-routing.module';



@NgModule({
  declarations: [OpdBillingComponent, IpdBillingComponent],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
