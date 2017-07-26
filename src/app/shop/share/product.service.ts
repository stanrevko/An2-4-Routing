import { Injectable } from '@angular/core';
import { Product }    from '../share/product.class';
import { Products }   from './mock-products';
import { Category }   from './category';

@Injectable()
export class ProductService {
    getData(): Product[]  {
        return Products;
    }

    /**
     * 
     * @param categories 
     * @param category 
     */
    isCategoryAdded(categories: Category[], category:Category): boolean {
        if(categories.length<1){ 
            return false;
        }    
        else{
            for(let cat of categories){
                if(cat.name == category.name) return true;
            }
            return false;
        }
    }

    getCategories(): Category[]{        
        let products = this.getData();
        let categories: Category[] = [];
        products.forEach(product => {
            if(!this.isCategoryAdded(categories, product.category)){
                categories.push(product.category);    
            }
        });
           
        return categories;
    }
}