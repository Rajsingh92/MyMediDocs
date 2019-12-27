
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MediShopModuleRoutingModule } from './medishop-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { IndexComponent } from './index/index.component';
import { ProductService } from '../shared/services/product.service';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductListComponent,
    IndexComponent,
    TruncatePipe,
    ProductComponent,
    ProductsComponent,
    CartComponent
  ],

  imports: [
    MediShopModuleRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule
  ],

  providers: [
    ProductService
  ]
})
export class MediShopModule { }
