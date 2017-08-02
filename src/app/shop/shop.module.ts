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
import { OrderComponent } from './order/order.component';
import { LocalStorageService } from 'angular-2-local-storage';
import { OrderFormComponent } from './order/order-form/order-form.component';

import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  declarations: [ProductListComponent, ShopComponent, CartComponent, CartItemComponent, OrderComponent, OrderFormComponent, OrderFormComponent],
  providers: [CartService, LocalStorageService],
})
export class ShopModule { 

}
