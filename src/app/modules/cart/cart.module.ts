import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CartComponent } from './cart.component';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
