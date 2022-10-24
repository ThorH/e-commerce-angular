import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product'
import { products } from 'src/dbProducts';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList = products

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  addToCart(product: Product) {
    this.cartService.addProduct(product)
  }
}
