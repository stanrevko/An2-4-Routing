import { Component, OnInit } from '@angular/core';
import { ProductService  } from '../share/product.service';
import { Category } from '../share/category';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
   categories: Category[];

   constructor(private productService: ProductService) { }

  ngOnInit(){    
          this.categories = this.productService.getCategories();        
  }
}
