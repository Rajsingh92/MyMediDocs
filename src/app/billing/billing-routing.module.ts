import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpdBillingComponent } from './ipd-billing/ipd-billing.component';



const routes: Routes = [
  {
    path: '',
    component: IpdBillingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
