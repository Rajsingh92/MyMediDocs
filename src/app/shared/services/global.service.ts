import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  shoppingCart: any = [];
	cartView: any = [];

  constructor() { }

  getCart() {
  	return this.shoppingCart;
  }

  addToCart(item) {
  	if(this.shoppingCart.length == 0) {
  		this.prependItemToCart(item);
  	} else {
  		let itemExists = this.checkItemExists(item);
  		if(itemExists) {
  			for(var a = 0; a < this.shoppingCart.length; a++) {
  				if(this.shoppingCart[a].ProductName == item.ProductName) {
  					this.shoppingCart[a].quantity += 1;
  					this.shoppingCart[a].total += item.ProductPrice;
  				}
  			}
  		} else {
  			this.prependItemToCart(item);
  		}
  	}
  }

  checkItemExists(item) {
  	for(var a = 0; a < this.shoppingCart.length; a++) {
  		if(this.shoppingCart[a].ProductName == item.ProductName) {
  			return true;
  		} else {
  			return false;
  		}
  	}
  }

  prependItemToCart(item) {
  	let newItem = {
  		title: item.ProductName,
  		quantity: 1,
  		total: item.ProductPrice
  	}

  	this.shoppingCart.unshift(newItem);
  }

  removeItemFromCart(item) {
  	for(var index = 0; index < this.shoppingCart.length; index++) {
  		let cartItem = this.shoppingCart[index];
  		if(cartItem.ProductName == item.ProductName) {
  			if(cartItem.quantity > 1) {
  				cartItem.quantity -= 1;
  				cartItem.total -= item.ProductPrice;
  			} else {
  				this.shoppingCart.splice(index, 1);
  			}
  		}
  	}
  }

  emptyCart() {
  	this.shoppingCart = [];
  }
}
