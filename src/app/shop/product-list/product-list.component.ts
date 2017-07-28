import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product  } from '../share/product.class';
import { ProductService  } from '../share/product.service';
import { CartService  } from '../share/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],  
})
export class ProductListComponent implements OnInit {
  public products: Product[] ;

  constructor(private productService: ProductService,
              private cartService: CartService) { }

 ngOnInit(){    
        this.products = this.productService.getData();        
  }

  onAddToCart(event : Event, product){
    event.preventDefault();
    this.cartService.addItem(product);
  }
}
