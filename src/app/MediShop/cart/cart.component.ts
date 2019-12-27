import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  shoppingCart: any = [];
	total: number = 0;


  constructor(private globalService : GlobalService) {
  	
  }

  ngOnInit() {
    this.shoppingCart = this.globalService.getCart();
    console.log(this.shoppingCart)
  	for(var a = 0; a < this.shoppingCart.length; a++) {
  		this.total += this.shoppingCart[a].total;
  	}
  }

  emptyCart() {
  	this.globalService.emptyCart();
  	this.shoppingCart = [];
  }

}
