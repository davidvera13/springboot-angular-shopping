import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../common/product";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private baseUrl: string = "http://localhost:8080/api/products?size=100"
  private baseUrl: string = "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) {

  }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getCategoryProductList(categoryId: number): Observable<Product[]> {
    // need to build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;
    console.log(searchUrl);

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
