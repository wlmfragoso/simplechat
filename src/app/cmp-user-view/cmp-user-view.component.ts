import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

declare var M: any;

@Component({
  selector: 'app-cmp-user-view',
  templateUrl: './cmp-user-view.component.html',
  styleUrls: ['./cmp-user-view.component.sass'],
  providers: [ UserService ]
})
export class CmpUserViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
/* +++ Comento hasta la implementacion del formulario
export class CmpUserViewComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }


  getUser() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }
}
*/
