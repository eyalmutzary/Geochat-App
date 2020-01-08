import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service'
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private userSub: Subscription;
  private isAuthenticated: boolean = false;


  constructor(private authService: AuthService, private chatService: ChatService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user; // True if user authenticated
      this.chatService.joinRoom();
      console.log("Hello " + user.fullname)
    });

  }

}
