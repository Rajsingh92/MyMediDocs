import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBatchDetailsComponent } from './add-batch-details/add-batch-details.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { AddDistributorComponent } from './add-distributor/add-distributor.component';
import { AddManufacturerComponent } from './add-manufacturer/add-manufacturer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSalestaxComponent } from './add-salestax/add-salestax.component';
import { BelowStocksComponent } from './below-stocks/below-stocks.component';
import { BillingComponent } from './billing/billing.component';
import { DoctorPrescriptionBillingComponent } from './doctor-prescription-billing/doctor-prescription-billing.component';
import { ExpiredProductComponent } from './expired-product/expired-product.component';
import { GoingToExpireComponent } from './going-to-expire/going-to-expire.component';
import { PurchaseEntryComponent } from './purchase-entry/purchase-entry.component';
import { PurchaseReturnsComponent } from './purchase-returns/purchase-returns.component';
import { SalesReturnsComponent } from './sales-returns/sales-returns.component';




const routes: Routes = [
  {
    path: 'add-batch-details',
    component: AddBatchDetailsComponent
  },
  {
    path: 'add-discount',
    component:AddDiscountComponent
  },
  {
    path: 'add-distributor',
    component:AddDistributorComponent
  },
  {
    path: 'add-manufacturer',
    component: AddManufacturerComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'add-salestax',
    component: AddSalestaxComponent
  },
  {
    path: 'below-stocks',
    component: BelowStocksComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  {
    path: 'doctor-prescription-billing',
    component: DoctorPrescriptionBillingComponent
  },
  {
    path: 'expired-product',
    component: ExpiredProductComponent
  },
  {
    path: 'going-to-expire',
    component: GoingToExpireComponent
  },
  {
    path: 'purchase-entry',
    component: PurchaseEntryComponent
  },
  {
    path: 'purchase-returns',
    component: PurchaseReturnsComponent
  },
  {
    path: 'sales-returns',
    component: SalesReturnsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
