import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent, TaskFormComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: TaskFormComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule] 
})
export class TaskRoutingModule { }