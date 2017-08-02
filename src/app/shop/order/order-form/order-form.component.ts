import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Order} from "../../share/order";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  order = new Order();

  constructor() { }

  ngOnInit() {
  }

}
