import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/interface/products';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';
import { CartService } from 'src/app/service/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  arrayCart!: products[];
  sub!: Subscription;
  tot: number = 0;
  form!: FormGroup;
  loading: Boolean  = false;
  prods!: products[];

  constructor(private prodService: ProductsService, private cartService: CartService, private fb: FormBuilder) { }

  addToCart(obj: products) {
    this.prodService.addToSrvArray(obj);
  }
  totalPrice() {
    for(let prod of this.arrayCart) {
      this.tot = this.tot + prod.price;
    }
    return this.tot;
  }


  ngOnInit(): void {
    this.arrayCart = this.prodService.getArrayCart();
    this.form = this.fb.group({
      name: [],
      email: [],
      address: []
    });
    this.tot = 0;
    this.tot = this.totalPrice();
  }
}