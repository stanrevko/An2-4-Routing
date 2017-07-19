import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Task } from './../task';
import { TaskArrayService } from './../task-array.service';


@Component({
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.css'],
  providers: [TaskArrayService],
})
export class TaskFormComponent implements OnInit, OnDestroy {
  @Input() task: Task;

 constructor(
    private taskArrayService: TaskArrayService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


 ngOnInit(): void {
    this.task = new Task(null, '', null, null);
     
    // it is not necessary to save subscription to route.params
    // it handles automatically
    this.route.params
      .switchMap((params: Params) => this.taskArrayService.getTask(+params['id']))
      .subscribe(
        task => this.task = Object.assign({}, task),
        err => console.log(err)
    );
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
    this.router.navigate(['/']);
  }

  goBack(): void {
        this.router.navigate(['/home']);
  }
}
