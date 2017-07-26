import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '.';


const routes: Routes = [
  {
    path: 'shop',
    component: ProductListComponent,
//    canActivate: [AuthGuard],
    children: [
      {
        path: '',
//        canActivateChild: [AuthGuard],
        children: [
//          { path: 'users', component: ManageUsersComponent },

        ]
      }
    ]
  }
];

export let adminRouterComponents = [ProductListComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
