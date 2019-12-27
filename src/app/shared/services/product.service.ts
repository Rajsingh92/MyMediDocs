import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName,ProductCategory, ProductDescription, ProductPrice,ProductQuatity,ProductSeller) {
    console.log(ProductName,ProductCategory, ProductDescription, ProductPrice,ProductQuatity,ProductSeller);
    const obj = {
      ProductName,
      ProductCategory, 
      ProductDescription,
      ProductPrice,
      ProductQuatity,
      ProductSeller
    };

    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this
           .http
           .get(`${this.uri}`);
  }

  getProductById(id) {
    // let searchUrl = "http://localhost:5000/book?bookId=" + id;
    // return this.http.get(searchUrl).map(res => res.json());
    return this.http.get(`${this.uri}/${id}`);
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  // updateProduct(ProductName,ProductCategory, ProductDescription, ProductPrice,ProductQuatity,ProductSeller,ProductId,ProductAdded,Ratings,Favourite id) {
  //   const obj = {
  //     ProductName,
  //     ProductCategory, 
  //     ProductDescription, 
  //     ProductPrice,
  //     ProductQuatity,
  //     ProductSeller,
  //     ProductId,
  //     ProductAdded,
  //     Ratings,
  //     Favourite
  //   };

  //   this
  //     .http
  //     .post(`${this.uri}/update/${id}`, obj)
  //     .subscribe(res => console.log('Update Complete'));
  // }

  deleteProduct(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

}

