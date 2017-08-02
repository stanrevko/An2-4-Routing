import { Injectable } from '@angular/core';
import { Product } from './product.class';



interface ICart{  
  getItems(): Product[];
  addItem(item):void;
  removeItem(item): void;
}

Injectable()
export class CartService implements ICart{
    private items: Product[] = [];
    private cartKey:string = "app-shop-cart";
     
    constructor(){        
        this.items = JSON.parse(localStorage.getItem(this.cartKey));
        if(!this.items) this.items = [];        
    }

    store() : void{
        localStorage.setItem(this.cartKey, JSON.stringify(this.items));     
    }

    getItems(): Product[]  {       
        return this.items || [];
    }

    addItem(item) : void {        
        this.items.push(item);    
        this.store();
    }

    removeItem(item) : void{
        this.items.splice(this.items.indexOf(item),1);
        this.store();           
    }

    

   
}