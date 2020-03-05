import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationScheduleComponent } from './operation-schedule/operation-schedule.component';
import { AddDrugComponent } from './add-drug/add-drug.component';
import { AddSurgeryComponent } from './add-surgery/add-surgery.component';
import { SurgeryItemsComponent } from './surgery-items/surgery-items.component';
import { BabiesDetailsComponent } from './babies-details/babies-details.component';
import { OperationRoutingModule } from './operation-routing.module';


@NgModule({
  declarations: [
    OperationScheduleComponent, 
    AddDrugComponent, 
    AddSurgeryComponent, 
    SurgeryItemsComponent, 
    BabiesDetailsComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule
  ]
})
export class OperationModule { }
