import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service'
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  private isAuthenticated: boolean = false;
  isMobile = false;


  constructor(private authService: AuthService, private chatService: ChatService) { }

  ngOnInit() {
    this.isMobile = this.chatService.getIsMobile(); // check if using mobile screen
    window.onresize = () => {
      this.isMobile = this.chatService.getIsMobile();
    };

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user; // True if user authenticated
      
      this.chatService.joinRoom(); // Joins the room
      console.log("Hello " + user.fullname)
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
