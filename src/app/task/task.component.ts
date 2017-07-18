import { Component, EventEmitter, Input, Output } from '@angular/core';
import {TaskArrayService} from './index';
import { Task } from './task';
//import { Router } from '@angular/router';

@Component({
  selector: 'task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  providers: [
    TaskArrayService,
  ]
})
export class TaskComponent {
  @Input()  task: Task;
  @Output() onComplete = new EventEmitter<Task>();

  constructor(
    private taskArrayService: TaskArrayService,
  //  private router: Router
  ) { }


  completeTask(event: any): void {
    this.onComplete.emit(this.task);
  }

  editTask() {
    const link = ['/edit', this.task.id];
    //this.router.navigate(link);

  }
}
