import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductComponent } from './components/product/product.component';

const productsRoutes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "product/:id", component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
