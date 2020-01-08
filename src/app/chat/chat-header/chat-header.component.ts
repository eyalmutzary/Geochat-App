import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ChatService } from '../chat.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {
  roomTitle: string = "Unkown Room Name"
  isMobile = false;

  constructor(private chatService: ChatService, private authService: AuthService) { }

  ngOnInit() {
    this.isMobile = this.chatService.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.chatService.getIsMobile();
    };
    this.roomTitle = JSON.parse(localStorage.getItem('userData')).region

  }

  onLogout(){
    this.authService.logout();
  }

}
