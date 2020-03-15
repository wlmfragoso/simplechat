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

  constructor(private http: HttpClient) {
    // this.selectedUser = new User();
  }

  public getUser(): User[] {
    // console.log('entre al metodo getUser');
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.URL_API)
      .toPromise()
      .then((res: any) => {

        this.users = res.map((objObtenido: any) => {
          return new User(
            objObtenido._id,
            objObtenido.id,
            objObtenido.userName,
            objObtenido.info,
            objObtenido.phone,
            objObtenido.lastHeartBit
          );
        }) ;
        // console.log('getUser llamada, obtubo esto:' + this.users);
        resolve();
      },
      err => {
        // Error
        reject(err);
      });
    });
    // console.log('getUser fin:' + this.users);
    return promise;
  }


  public postUser(user: User) {
    return this.http.post(this.URL_API, user);
  }



  public putUser(user: User) {
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  public deleteUser(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
