import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-cmp-main',
  templateUrl: './cmp-main.component.html',
  styleUrls: ['./cmp-main.component.sass'],
  providers: [ UserService ]
})

export class CmpMainComponent implements OnInit {
  contactos: any;
  consultaContactos = '';
  constructor(private userService: UserService) {
    // console.log('Constructor de mainComponent');
    // this.contactos = this.userService.getUser();
    // console.log('Contactos: ' + this.contactos);
  }

  ngOnInit(): void {
    this.contactos = this.userService.getUser();
    // setTimeout(() => {this.ngOnInit();}, 10000);
  }

}
