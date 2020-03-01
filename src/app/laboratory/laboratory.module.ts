import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitMasterComponent } from './unit-master/unit-master.component';
import { CategoryNameComponent } from './category-name/category-name.component';
import { NewTestComponent } from './new-test/new-test.component';
import { ProfileMasterComponent } from './profile-master/profile-master.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { SearchComponent } from './search/search.component';
import { BillingComponent } from './billing/billing.component';
import { PerformTestComponent } from './perform-test/perform-test.component';




@NgModule({
  declarations: [
    UnitMasterComponent, 
    CategoryNameComponent, 
    NewTestComponent, 
    ProfileMasterComponent, 
    DiagnosticComponent, 
    SearchComponent, 
    BillingComponent, 
    PerformTestComponent, 
  ],
  imports: [
    CommonModule
  ]
})
export class LaboratoryModule { }
