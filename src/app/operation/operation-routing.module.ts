import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDrugComponent } from './add-drug/add-drug.component';
import { AddSurgeryComponent } from './add-surgery/add-surgery.component';
import { BabiesDetailsComponent } from './babies-details/babies-details.component';
import { OperationScheduleComponent } from './operation-schedule/operation-schedule.component';
import { SurgeryItemsComponent } from './surgery-items/surgery-items.component';



const routes: Routes = [
  {
    path:'add-drug',
    component: AddDrugComponent
  },
  {
    path: 'add-surgery',
    component: AddSurgeryComponent
  },
  {
    path: 'babies-details',
    component: BabiesDetailsComponent
  },
  {
    path: 'operation-schedule',
    component: OperationScheduleComponent
  },
  {
    path: 'surgery-items',
    component: SurgeryItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }
