import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoomComponent } from './chat/room/room.component';
import { OnlineUsersListComponent } from './chat/room/online-users-list/online-users-list.component';
import { RoomStatsComponent } from './chat/room/room-stats/room-stats.component';
import { ChatComponent } from './chat/chat.component';
import { ConversationComponent } from './chat/conversation/conversation.component';
import { WritingAreaComponent } from './chat/writing-area/writing-area.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';


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
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
