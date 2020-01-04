import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoomComponent } from './chat/room/room.component';
import { ChatComponent } from './chat/chat.component';
import { ConversationComponent } from './chat/conversation/conversation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  {
    path: 'chat',
    component: ChatComponent,
    children: [
      { path: 'room', component: RoomComponent}
    ]
  },
  { path: 'room', component: RoomComponent},
  { path: 'sign-up', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
