import { Component, OnInit } from '@angular/core';
import { Product } from '../share/product.class';
import { CartService  } from '../share/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
 items: Product[]; 

 constructor(private cartService: CartService){       
 }

  ngOnInit() {
     this.items = this.cartService.getItems();    
  }


  remove(item: Product){
    this.cartService.removeItem(item);
  }

  getTotal(){
    let sum = 0;
    this.items.forEach(function(el){
      sum += el.price;
    })

    return sum;
  }

}
