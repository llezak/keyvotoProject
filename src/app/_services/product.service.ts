import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../_models/product";

const PRODUCT_API = 'https://dummyjson.com/products' ;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {

  }

  public getProducts(): Observable<any> {
    return this.httpClient.get<any>(PRODUCT_API+'?limit=10') ;

  }
  public getProduct(productId:number): Observable<Product> {
    return this.httpClient.get<Product>(PRODUCT_API+'/'+productId ) ;

  }


}
