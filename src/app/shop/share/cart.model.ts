import { Injectable } from '@angular/core';
import { Product } from './product.class';

interface ICart{  
  getItems(): Product[];
  addItem(item):void;
  removeItem(item): void;
}

Injectable()
export class CartModel implements ICart{
    private items: Product[] = [];
    
    getItems(): Product[]  {
        return this.items || [];
    }

    addItem(item) : void {        
        this.items.push(item);    
    }

    removeItem(item) : void{
        this.items.splice(this.items.indexOf(item),1);
    }

   
}