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
  loading: boolean  = false;
  prods!: products[];

  constructor(private prodService: ProductsService, private cartService: CartService, private form: FormBuilder) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addToCart(obj: products) {
    this.prodService.addToSrvArray(obj);
  }
  totalPrice() {
    for(let prod of this.arrayCart) {
      this.tot += prod.prices;
    }
    return this.tot;


  ngOnInit(): void {
    this.arrayCart = this.prodService.getArrayCart();
    this.form = this.form.group({
      name: [],
      email: [],
      address: []
    });
    this.tot = 0;
    this.tot = this.totalPrice();
}
    this.loading = true;
    this.sub = this.cartService.get().subscribe((arrayProd) => {
      this.prods = arrayProd;
      this.loading = false;
    })
  }

  addNum() {
    this.prodService.countCart();
  }

}
