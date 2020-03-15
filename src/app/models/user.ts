import { formatDate } from '@angular/common';

export class User {

    constructor(_id = '',
                id = 0,
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
    id: number;
    userName: string;
    info: string;
    phone: string;
    lastHeartBit: number;
    observable: any;
}