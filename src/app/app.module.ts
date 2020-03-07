import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpMainComponent } from './cmp-main/cmp-main.component';
import { CmpChatViewComponent } from './cmp-chat-view/cmp-chat-view.component';
import { CmpUserViewComponent } from './cmp-user-view/cmp-user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpMainComponent,
    CmpChatViewComponent,
    CmpUserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
