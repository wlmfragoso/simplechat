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
    private userService: UserService,
    private activatedRoute: ActivatedRoute) {
      this.idContacto = this.activatedRoute.snapshot.params.id;
     }

  ngOnInit(): void {
    this.myUser = this.userService.getSingleUser(this.idContacto);
    /*console.log(respuestaConsultaUsuarios);
    if (respuestaConsultaUsuarios.length <= 0) {
      console.error('La consulta de usuarios no ha encontrado el identificador seleccionado');
      this.myUser = new User();
    } else {
      this.myUser = respuestaConsultaUsuarios[0];
    }*/
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
