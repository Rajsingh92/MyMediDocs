import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpdBillingComponent } from './ipd-billing/ipd-billing.component';
import { OpdBillingComponent } from './opd-billing/opd-billing.component';



const routes: Routes = [
  {
    path: 'ipd-billing',
    component: IpdBillingComponent
  },
  {
    path:'opd-billing',
    component:OpdBillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
