import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddManufacturerComponent } from './add-manufacturer/add-manufacturer.component';
import { AddDistributorComponent } from './add-distributor/add-distributor.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { AddSalestaxComponent } from './add-salestax/add-salestax.component';
import { AddProductComponent } from './add-product/add-product.component';

import { AddBatchDetailsComponent } from './add-batch-details/add-batch-details.component';
import { PurchaseEntryComponent } from './purchase-entry/purchase-entry.component';
import { PurchaseReturnsComponent } from './purchase-returns/purchase-returns.component';
import { BillingComponent } from './billing/billing.component';
import { SalesReturnsComponent } from './sales-returns/sales-returns.component';
import { DoctorPrescriptionBillingComponent } from './doctor-prescription-billing/doctor-prescription-billing.component';
import { BelowStocksComponent } from './below-stocks/below-stocks.component';
import { GoingToExpireComponent } from './going-to-expire/going-to-expire.component';
import { ExpiredProductComponent } from './expired-product/expired-product.component';
import { PharmacyRoutingModule } from './pharmacy-routing.module';



@NgModule({
  declarations: [
    AddManufacturerComponent, 
    AddDistributorComponent, 
    AddDiscountComponent, 
    AddSalestaxComponent, 
    AddProductComponent,
    AddBatchDetailsComponent,
    PurchaseEntryComponent,
    PurchaseReturnsComponent,
    BillingComponent,
    SalesReturnsComponent,
    DoctorPrescriptionBillingComponent,
    BelowStocksComponent,
    GoingToExpireComponent,
    ExpiredProductComponent
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule
  ]
})
export class PharmacyModule { }
