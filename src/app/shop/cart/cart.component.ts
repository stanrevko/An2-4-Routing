import { Component, OnInit } from '@angular/core';
import { Product } from '../share/product.class';
import { CartService  } from '../share/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent implements OnInit {  
  items: Product[];
  
  constructor(private CartService: CartService){       
  }

  ngOnInit() {           
    this.items = this.CartService.getItems();    
  }

  getItems(){
    return this.CartService.getItems();
  }

  removeItem(item: Product){
    this.CartService.removeItem(item);
  }

  getCount(){
    return this.items.length;
  }

  addItem(item: Product){
    this.CartService.addItem(item);
  }


}
