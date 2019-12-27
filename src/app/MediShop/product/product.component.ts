import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


	product;
	productId;

  constructor(  private ps: ProductService,
    private globalService: GlobalService,
    private router: ActivatedRoute) {
  }

  ngOnInit() {
  	this.router.params.subscribe(params => {
  		this.productId = params["id"];
  		this.ps.getProductById(this.productId).subscribe(product => {
  			this.product = product;
  			console.log(product);
  		});
  	});
  }

  addToCart() {
    this.globalService.addToCart(this.product);
    alert("Successfully added");
  }
}
