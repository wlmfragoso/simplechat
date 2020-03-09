import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-cmp-main',
  templateUrl: './cmp-main.component.html',
  styleUrls: ['./cmp-main.component.sass'],
  providers: [ UserService ]
})

export class CmpMainComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }
}
