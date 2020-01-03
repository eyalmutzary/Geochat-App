import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { OnlineUsersListComponent } from './room/online-users-list/online-users-list.component';
import { RoomStatsComponent } from './room/room-stats/room-stats.component';
import { ChatComponent } from './chat/chat.component';
import { ConversationComponent } from './chat/conversation/conversation.component';
import { WritingAreaComponent } from './chat/writing-area/writing-area.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    OnlineUsersListComponent,
    RoomStatsComponent,
    ChatComponent,
    ConversationComponent,
    WritingAreaComponent,
    ChatHeaderComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
