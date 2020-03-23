import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-cmp-user-view',
  templateUrl: './cmp-user-view.component.html',
  styleUrls: ['./cmp-user-view.component.sass'],
  providers: [ UserService ]
})
export class CmpUserViewComponent implements OnInit {
  public myUser: User;
  idContacto: any;
  constructor(
    public userService: UserService,
    private activatedRoute: ActivatedRoute) {
      this.idContacto = this.activatedRoute.snapshot.params.id;
     }

  ngOnInit(): void {
    this.userService.getSingleUser(this.idContacto);
    /*console.log(respuestaConsultaUsuarios);
    if (respuestaConsultaUsuarios.length <= 0) {
      console.error('La consulta de usuarios no ha encontrado el identificador seleccionado');
      this.myUser = new User();
    } else {
      this.myUser = respuestaConsultaUsuarios[0];
    }*/
  }

  public actualizarUsuario(form?: NgForm) {
    // console.log(form.value);
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
  }

}
