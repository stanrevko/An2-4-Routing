import { Component, OnInit } from '@angular/core';
import { Product } from '../share/product.class';
import { CartModel  } from '../share/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent implements OnInit {  
  items: Product[];
  
  constructor(private CartModel: CartModel){       
  }

  ngOnInit() {           
    this.items = this.CartModel.getItems();    
  }

  getItems(){
    return this.CartModel.getItems();
  }

  removeItem(item: Product){
    this.CartModel.removeItem(item);
  }

  getCount(){
    return this.items.length;
  }

  addItem(item: Product){
    this.CartModel.addItem(item);
  }


}
