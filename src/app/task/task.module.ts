import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent, TaskComponent, TaskFormComponent, TaskArrayService } from '.';
//import { TaskRoutingModule } from './task.routing.module';

@NgModule({
  imports: [
    CommonModule,     
   // TaskRoutingModule
  ],
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskFormComponent,,    
  ],
  exports: [
    TaskComponent,
    TaskListComponent,
    TaskFormComponent,
  ],  
})
export class TaskModule {
  
}
