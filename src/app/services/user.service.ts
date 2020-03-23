import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public URL_API = 'http://localhost:3000/';
  public users: User[];
  public selectedUser: User;
  public lastQueriedUser: User;
  public contadorConsultasUsr = 0;

  constructor(private http: HttpClient) {
    // this.selectedUser = new User();
  }

  // Consulta  todos los usuarios activos del chat
  public getUser() {
    // console.log('entre al metodo getUser');
    this.contadorConsultasUsr = this.contadorConsultasUsr + 1 ;
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.URL_API)
      .toPromise()
      .then((res: any) => {

        this.users = res.map((objObtenido: any) => {
          return new User(
            objObtenido._id,
            objObtenido._id,
            objObtenido.userName,
            objObtenido.info,
            objObtenido.phone,
            objObtenido.lastHeartBit
          );
        }) ;
        if( this.contadorConsultasUsr <= 1 && this.users.length >= 1 ) {
          this.selectedUser = this.users[this.users.length - 1];
         }
        // console.log('getUser llamada, obtubo esto:' + this.users);
        resolve();
      },
      err => {
        // Error
        reject(err);
      });
    });
    // console.log('getUser fin:' + this.users);
    return;
  }

  // consulta la informaciónde un usuario en particular
  public getSingleUser(id: string) {
    // console.log('entre al metodo getSingleUser');
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.URL_API + id)
      .toPromise()
      .then((res: any) => {
        // console.log(res);
        this.lastQueriedUser = new User(
            res._id,
            res._id,
            res.userName,
            res.info,
            res.phone,
            res.lastHeartBit
          );
        // console.log(this.lastQueriedUser);
        if( this.contadorConsultasUsr <= 1 ) {
          this.selectedUser = this.lastQueriedUser;
         }
        resolve();
      },
      err => {
        // Error
        reject(err);
      });
    });
    // console.log('getUser fin:' + this.users);
    return;
  }

  public postUser(user: User) {
    // console.log('entre al metodo getUser');
    const promise = new Promise((resolve, reject) => {
      // this.http.get(this.URL_API)
      this.http.post(this.URL_API, user)
      .toPromise()
      .then((res: any) => {
        // console.log('postUser llamada, obtubo esto:' + res.toString());
        this.getUser();
        return res;
        resolve();
      },
      err => {
        // Error
        // console.log('postUser llamada, obtubo esto:' + err.toString());
        reject(err);
      });
    });
    return;
  }

  public putUser(user: User) {
    // console.log('entre al metodo getUser');
    const promise = new Promise((resolve, reject) => {
      // this.http.get(this.URL_API)
      this.http.put(this.URL_API + user.id, user)
      .toPromise()
      .then((res: any) => {
        this.getUser();
        this.selectedUser = user;
        return res;
        // console.log('postUser llamada, obtubo esto:' + res.toString());
        resolve();
      },
      err => {
        // Error
        reject(err);
      });
    });
    return;
    // return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  public deleteUser(id: string) {
    return this.http.delete(this.URL_API + `/${id}`);
  }
}
