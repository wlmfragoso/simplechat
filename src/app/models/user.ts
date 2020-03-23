import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class User {

    constructor(_id = '',
                id = '',
                userName = ( 'DefaultUser' + Date.now() ),
                info = 'Usuario default',
                phone = 'No registrado',
                lastHeartBit = Date.now()) {
        this._id = _id;
        this.id = id;
        this.userName = userName;
        this.info = info;
        this.phone = phone;
        this.lastHeartBit = lastHeartBit;
    }

    _id: string;
    id: string;
    userName: string;
    info: string;
    phone: string;
    lastHeartBit: number;
    observable: any;
}
