import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cmp-main',
  templateUrl: './cmp-main.component.html',
  styleUrls: ['./cmp-main.component.sass'],
  providers: [ UserService ]
})

export class CmpMainComponent implements OnInit {

  constructor() { }
  private userService: UserService;
  ngOnInit(): void {
  }
}
/* +++ Comento hasta la implementacion de la llamada para enviar los usuarios a la vista
export class CmpMainComponent implements OnInit {

  // constructor() { }
  constructor(private http: HttpClient ) { }
  private userService: UserService;
  public URL_API = 'http://localhost:3000/';
  public users = [];

  ngOnInit() {
    console.log('entre al init');
    this.getUsersLocal();
  }

  public getUsersLocal() {
    console.log('entre a users local');
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }
}*/
