import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { CategoryNameComponent } from './category-name/category-name.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { NewTestComponent } from './new-test/new-test.component';
import { PerformTestComponent } from './perform-test/perform-test.component';
import { ProfileMasterComponent } from './profile-master/profile-master.component';
import { SearchComponent } from './search/search.component';
import { UnitMasterComponent } from './unit-master/unit-master.component';


const routes: Routes = [
  {
    path: 'billing',
    component:BillingComponent
  },
  {
    path: 'category-name',
    component: CategoryNameComponent
  },
  {
    path: 'diagnostic',
    component:DiagnosticComponent
  },
  {
    path: 'new-test',
    component: NewTestComponent
  },
  {
    path:'perform-test',
    component:PerformTestComponent
  },
  {
    path: 'profile-master',
    component:ProfileMasterComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'unit-master',
    component:UnitMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryRoutingModule { }
