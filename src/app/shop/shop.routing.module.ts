import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent, OrderComponent, ProductListComponent, OrderFormComponent } from '.';


const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
//    canActivate: [AuthGuard],
    children: [
      {
        path: '',
//        canActivateChild: [AuthGuard],
        children: [
          { path: 'order/order-form', component: OrderFormComponent },
          { path: 'order', component: OrderComponent,
         },          
          { path: '', component: ProductListComponent },

        ]
      }
    ]
  }
];

export let shopRouterComponents = [ShopComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
