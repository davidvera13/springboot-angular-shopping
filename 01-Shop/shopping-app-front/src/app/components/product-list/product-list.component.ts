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
  currentCategoryName: string;
  searchMode: boolean;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.listProducts();
    this.route.paramMap.subscribe(
      () => this.listProducts()
    );
  }
  listProducts() {
    // check the url
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode) {
      this.handleSearchProducts()
    } else {
      this.handleListProducts();
    }

  }

  handleListProducts() {
    // check if id parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');

      // get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
    } else {
      // id is set to 1 (default value)
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }
    this.productService.getCategoryProductList(this.currentCategoryId).subscribe(
      data => { this.products = data }
    );
  }

  private handleSearchProducts() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword');
    // search by keyword using service
    this.productService.searchProducts(keyword).subscribe(
      // we subscribe the result of the call of the service to the list of products
      data => { this.products = data; }
    )
  }
}
