import { Component, OnInit, OnDestroy } from '@angular/core';

import { Task } from './../task';
import { TaskArrayService } from './../task-array.service';

@Component({
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnDestroy {
  task: Task;

  constructor(
    private taskArrayService: TaskArrayService,
  ) { }

  ngOnInit(): void {
    this.task = new Task(null, '', null, null);
  }

  ngOnDestroy(): void {
  }

  saveTask() {
    let task = new Task(
      this.task.id,
      this.task.action,
      this.task.priority,
      this.task.estHours
    );

    
    if (task.id) {
      this.taskArrayService.updateTask(task);
    } 
    else {
      this.taskArrayService.addTask(task);
    }
  }

  goBack(): void {
  }
}
