import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from '.';


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
//          { path: 'users', component: ManageUsersComponent },

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
