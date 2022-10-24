import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/services/cart.service';

import { CartProduct } from 'src/app/interfaces/cartProduct';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  
  showCart = false;
  total = 0
  cartProducts: CartProduct[] = [];
  cartSubscription = new Subscription();

  constructor(public cartService: CartService){}

  ngOnInit(): void {
    this.cartSubscription.add(this.cartService.cart$.subscribe((cartData) => {
      this.cartProducts = cartData
      this.total = this.addTotalPrice() 
    }));
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  clickCart() {
    this.showCart = !this.showCart;
  }

  clearCart() {
    this.cartService.clearProducts();
  } 

  increaseQuantity(productId: number) {
    this.cartService.increaseProductQuantity(productId)
  }

  decreaseQuantity(productId: number) {
    this.cartService.decreaseProductQuantity(productId)
  }

  addTotalPrice(): number {
    let totalPrice = 0
    this.cartProducts.forEach((item) => totalPrice += item.price * item.quantity)
    return totalPrice;
  }

}
