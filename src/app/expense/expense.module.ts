import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ExpenseTypeComponent } from './expense-type/expense-type.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseRoutingModule } from './expense-routing.module';


@NgModule({
  declarations: [
    BankDetailsComponent,
    ExpenseTypeComponent,
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule
  ]
})
export class ExpenseModule { }
