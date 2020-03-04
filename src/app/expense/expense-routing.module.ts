import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseTypeComponent } from './expense-type/expense-type.component';


const routes: Routes = [
  {
    path: 'bank-details',
    component: BankDetailsComponent
  },
  {
    path: 'expense-list',
    component: ExpenseListComponent
  },
  {
    path: 'expense-type',
    component: ExpenseTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
