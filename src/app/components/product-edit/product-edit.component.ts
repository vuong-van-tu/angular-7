import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product = {};

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.product = this.productService.findById(id);
      this.productForm.setValue(this.product);
    });
  }

  update(id: number) {
    const product = this.productForm.value;
    console.log(product);
    this.productService.update(product.id, product);
    this.productForm.reset();
  }
}
