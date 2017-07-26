import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product  } from '../share/product.class';
import { ProductService  } from '../share/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],  
})
export class ProductListComponent implements OnInit {
  public products: Product[] ;
  @Output() addToCart = new EventEmitter();

  constructor(private productService: ProductService) { }

 ngOnInit(){    
        this.products = this.productService.getData();        
  }

  onAddToCart(event : Event, product){
    event.preventDefault();   
    this.addToCart.emit(product); 
  }
}
