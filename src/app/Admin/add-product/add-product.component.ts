import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProductService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
	    ProductPrice: ['', Validators.required ],
	    ProductCategory: ['', Validators.required ],
      ProductQuatity: ['', Validators.required ],
      ProductSeller: ['', Validators.required ]
    });
  }



  addProduct(ProductName,ProductCategory, ProductDescription, ProductPrice,ProductQuatity,ProductSeller) {
    this.ps.addProduct(ProductName,ProductCategory, ProductDescription, ProductPrice,ProductQuatity,ProductSeller);
  }

  ngOnInit() {
  }


}
