import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer, HostListener } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: any;
  @Output() remove = new EventEmitter(); 

  constructor(private el: ElementRef,
              private renderer: Renderer) { }

  ngOnInit() {
  }

  onRemove(){
    this.remove.emit(this.item);
  }

   @HostListener('mouseover') onMouseOver(){
     let part = this.el.nativeElement;
     this.renderer.setElementStyle(part, 'color', 'red');

   }

   @HostListener('mouseout') onMouseOut() {
     let part = this.el.nativeElement;
     this.renderer.setElementStyle(part, 'color', 'black');
      
  }

}
