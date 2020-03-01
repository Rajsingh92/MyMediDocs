import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ExpenseTypeComponent } from './expense-type/expense-type.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';



@NgModule({
  declarations: [BankDetailsComponent, ExpenseTypeComponent, ExpenseListComponent],
  imports: [
    CommonModule
  ]
})
export class ExpenseModule { }
