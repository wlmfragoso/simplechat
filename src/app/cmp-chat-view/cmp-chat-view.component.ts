import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserService } from './../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cmp-chat-view',
  templateUrl: './cmp-chat-view.component.html',
  styleUrls: ['./cmp-chat-view.component.sass'],
  providers: [UserService]
})
export class CmpChatViewComponent implements OnInit {

  idContacto: any;
  constructor(
    public userService: UserService,
    private activatedRoute: ActivatedRoute) {
    this.idContacto = this.activatedRoute.snapshot.params.id;
    // console.log( 'Recibi en clase simpleChat, idContacto= ' + this.idContacto);
    // console.log( userService.selectedUser );
   }

  ngOnInit(): void {
    this.userService.getSingleUser(this.idContacto);
  }

  public enviarMensaje(form?: NgForm) {
    console.log(form.value);
    /*
    // asigna el usuario seleccionado
    this.myUser = this.userService.selectedUser;
    // modifica los valores con los actuales del formulario y el ultimo heartbit
    this.myUser.id = this.userService.selectedUser._id;
    this.myUser.userName = form.value.userName;
    this.myUser.info = form.value.info;
    this.myUser.phone = form.value.phone;
    this.myUser.lastHeartBit = Date.now();
    // ejecuta la actualizacion
    this.userService.putUser(this.myUser);
    // reconsulta el usuario
    // this.userService.getSingleUser(this.idContacto);
    // this.userService.selectedUser = this.myUser;
    */
  }
}
