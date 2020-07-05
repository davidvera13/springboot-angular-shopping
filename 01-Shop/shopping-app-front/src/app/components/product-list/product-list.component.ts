import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.listProducts();
    this.route.paramMap.subscribe(
      () => this.listProducts()
    );
  }
  listProducts() {
    // check if id parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      // get the id and convert to number
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      // id is set to 1 (default value)
      this.currentCategoryId = 1;
    }
    this.productService.getCategoryProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data
      }
    );
  }

}
