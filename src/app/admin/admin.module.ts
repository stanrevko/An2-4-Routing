import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent, AdminDashboardComponent, ManageTasksComponent, ManageUsersComponent } from '.';
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminDashboardComponent, ManageTasksComponent, ManageUsersComponent, AdminComponent]
})
export class AdminModule { }
