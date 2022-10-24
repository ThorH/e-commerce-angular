import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { products } from 'src/dbProducts'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  idProduct: number = 0;
  routeSubscription = new Subscription();
  product: Product = { id: 0, 
                      name: '', 
                      price: 0, 
                      description:'', 
                      quantity: 0, 
                      image:'' };

  constructor(private route: ActivatedRoute, 
              public cartService: CartService) { }

  ngOnInit(): void {
    this.routeSubscription.add(this.route.params.subscribe(params => {
      const id = params['id'];

      
        this.idProduct = parseInt(id);
      
    }))
    
    const productFound = products.find(product => product.id === this.idProduct)

      if(productFound) {
        this.product = productFound;
      }
  }
  
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product)
  }

}
