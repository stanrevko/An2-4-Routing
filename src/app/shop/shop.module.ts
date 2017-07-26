import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService  } from './share/product.service';
import { CartModel  } from './share/cart.model';
import { CartComponent  } from './cart/cart.component';
import { Product  } from './share/product.class';
import { ShopRoutingModule } from './shop.routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  declarations: [ProductListComponent]
})
export class ShopModule { 

}
