import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Product } from 'src/app/interfaces/product'
import { CartProduct } from 'src/app/interfaces/cartProduct'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartData: CartProduct[] = JSON.parse(localStorage.getItem("cartItems") || "[]");
  private readonly _cart = new BehaviorSubject<CartProduct[]>(this.cartData);
  readonly cart$ = this._cart.asObservable();

  get cart(): CartProduct[] {
    return this._cart.getValue();
  }

  private set cart(cartProducts: CartProduct[]) {
    this._cart.next(cartProducts)
    localStorage.setItem("cartItems", JSON.stringify(this.cart))
  }

  addProduct(product: Product) {
    if(this.cart.find((item) => item.id === product.id)){
      this.increaseProductQuantity(product.id)
    } else {
      this.cart = [...this.cart, { id: product.id, 
        name: product.name, 
        price: product.price,
        image: product.image,
        quantity: 1 }];
    }

  }

  increaseProductQuantity(productId: number) {
    this.cart = this.cart.map((item) => {
      if(item.id === productId) {
        item.quantity ++;
      }
      return item
    })
  }

  decreaseProductQuantity(productId: number) {
    this.cart = this.cart.map((item) => {
      if(item.id === productId) {
        item.quantity --;
      }
      return item
    })

    this.cart = this.cart.filter((product) => product.quantity !== 0);
  }

  removeProduct(idProduct: number) {
    this.cart = this.cart.filter((product) => product.id !== idProduct);
  }

  clearProducts() {
    this.cart = [];
  }

}