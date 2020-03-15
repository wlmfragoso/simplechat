import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cmp-chat-view',
  templateUrl: './cmp-chat-view.component.html',
  styleUrls: ['./cmp-chat-view.component.sass']
})
export class CmpChatViewComponent implements OnInit {

  idContacto: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.idContacto = this.activatedRoute.snapshot.params.id;
    console.log( 'Recibi en clase simpleChat, idContacto= ' + this.idContacto);
   }

  ngOnInit(): void {
  }

}
