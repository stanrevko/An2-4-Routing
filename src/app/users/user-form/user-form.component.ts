import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params , Router } from '@angular/router';

import { User } from './../user';
import { UserArrayService } from './../user-array.service';
import { DialogService }  from './../../services/dialog.service';

@Component({
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  user: User;
  oldUser: User;

  constructor(
    private userArrayService: UserArrayService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.user = new User(null, '', '');

    this.route.params
      .switchMap((params: Params) => this.userArrayService.getUser(+params['id']))
      .subscribe(
        user => {
          this.user = Object.assign({}, user);
          this.oldUser = user;
        },
        err => console.log(err)
    );
  }

  ngOnDestroy(): void {
  }

  saveUser() {
    const user = new User(
      this.user.id,
      this.user.firstName,
      this.user.lastName
    );

    if (user.id) {
      this.userArrayService.updateUser(user);
      // if success
      this.oldUser = this.user;
      this.router.navigate(['/users', {id: user.id}]);
    } 
    else {
      this.userArrayService.addUser(user);
      // if success
      this.oldUser = this.user;      
    }

    this.router.navigate(['./../../'], { relativeTo: this.route});
  }

  goBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route});
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.oldUser || this.oldUser.firstName === this.user.firstName) {
      return true;
    }
    
    return this.dialogService.confirm('Discard changes?');
}

}
