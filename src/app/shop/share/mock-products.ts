import { Product } from './product.class';
import { Category } from './category';

export const Products: Product[] = [
  { id: 11, name: 'Potato',   category: new Category("Vegetables"),  price: 21, description: 'See more snippets like this online store item at'},
  { id: 12, name: 'Tomato',   category: new Category("Vegetables"),  price: 22, description: 'See more snippets like this online store item at'},
  { id: 13, name: 'Computer', category: new Category("IT"),          price: 23, description: 'See more snippets like this online store item at'},
  { id: 14, name: 'Phone',    category: new Category("IT"),          price: 24, description: 'See more snippets like this online store item at'},
  { id: 15, name: 'Eggs',     category: new Category("Food"),        price: 25, description: 'See more snippets like this online store item at'},
  { id: 16, name: 'Cucumber', category: new Category("Vegetables"),  price: 26, description: 'See more snippets like this online store item at'},
  { id: 17, name: 'Dog',      category: new Category("Animals"),     price: 27, description: 'See more snippets like this online store item at'},
];