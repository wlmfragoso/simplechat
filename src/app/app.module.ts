import { UserService } from './services/user.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpMainComponent } from './cmp-main/cmp-main.component';
import { CmpChatViewComponent } from './cmp-chat-view/cmp-chat-view.component';
import { CmpUserViewComponent } from './cmp-user-view/cmp-user-view.component';
import { CmpIncomingMsgComponent } from './cmp-incoming-msg/cmp-incoming-msg.component';
import { CmpOutGoingMsgComponent } from './cmp-out-going-msg/cmp-out-going-msg.component';
import { CmpOnlineUserComponent } from './cmp-online-user/cmp-online-user.component';
import { ContactSearch } from '../pipes/contactSearch';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: CmpMainComponent},
  {path: 'home', component: CmpMainComponent},
  {path: 'user/:id', component: CmpUserViewComponent},
  {path: 'chat/:id', component: CmpChatViewComponent}
] ;

@NgModule({
  declarations: [
    AppComponent,
    CmpMainComponent,
    CmpChatViewComponent,
    CmpUserViewComponent,
    CmpIncomingMsgComponent,
    CmpOutGoingMsgComponent,
    CmpOnlineUserComponent,
    ContactSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
