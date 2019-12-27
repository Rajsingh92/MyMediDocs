import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit{

	bestProducts: Product[] = [];
	options: any;
  loading = false;
  products: Product[]=[];
	constructor(
  private ps: ProductService,
  private router: Router
	) {}

	ngOnInit() {

    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;

        this.products.forEach(data =>{
            if(data.Favourite){
              this.bestProducts.push(this.products[0]);
              // console.log(this.bestProducts);
            }
        });
        
         console.log(this.products);
        
    });
	}

	navigateToProduct(product) {
		this.router.navigate(["mediShop/product"], {
		  queryParams: {
			product: JSON.stringify(product)
		  }
		});
	  }
	

}
