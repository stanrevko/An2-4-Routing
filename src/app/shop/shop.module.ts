import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService  } from './share/product.service';
import { Product  } from './share/product.class';
import { ShopRoutingModule } from './shop.routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopComponent } from './shop.component';
import { CartService  } from './share/cart.service';
import { CartComponent  } from './cart/cart.component';
import { CartItemComponent  } from './cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  declarations: [ProductListComponent, ShopComponent, CartComponent, CartItemComponent],
  providers: [CartService],
})
export class ShopModule { 

}
