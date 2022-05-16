import { Injectable } from '@angular/core';
import { products } from '../interface/products';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  prodCart!: products[];
  sub = new Subject<number>();
  counter = 0;

  constructor() {
    this.prodCart = [];
   }

   getArrayCart() {
     return this.prodCart
   }

   addToSrvArray(arrayProd: products) {
     this.prodCart.push(arrayProd)
   }

   countCart() {
     this.counter ++;
     this.sub.next(this.counter);
   }

   resetCart(){
    this.prodCart=[];
    this.counter=0;
    this.sub.next(this.counter);
  }
}
