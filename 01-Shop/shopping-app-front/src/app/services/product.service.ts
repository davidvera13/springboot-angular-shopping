import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../common/product";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import {ProductCategory} from "../common/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private baseUrl: string = "http://localhost:8080/api/products?size=100"
  private baseProductUrl: string = "http://localhost:8080/api/products";
  private baseProductCategoryUrl: string = "http://localhost:8080/api/product-category";

  constructor(private httpClient: HttpClient) {
  }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponseProduct>(this.baseProductUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.baseProductCategoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  getCategoryProductList(categoryId: number): Observable<Product[]> {
    // need to build URL based on category id
    const searchUrl = `${this.baseProductUrl}/search/findByCategoryId?id=${categoryId}`;
    console.log(searchUrl);

    return this.getProducts(searchUrl);
  }
  searchProducts(keyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseProductUrl}/search/findByNameContaining?name=${keyword}`;
    console.log(searchUrl);

    // refactor:
    // return this.httpClient.get<GetResponseProduct>(searchUrl).pipe(
    //   map(response => response._embedded.products)
    // );
    return this.getProducts(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponseProduct {
  _embedded: {
    products: Product[];
  }
}
interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
