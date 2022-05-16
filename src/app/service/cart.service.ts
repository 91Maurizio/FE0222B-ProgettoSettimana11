import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  rootUrl = 'http://localhost:4201'

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<products[]>(`${this.rootUrl}/products`);
  } getProducts(id:Number) {
    return this.http.get<products>(`${this.rootUrl}/products/${id}`)
  }

}
