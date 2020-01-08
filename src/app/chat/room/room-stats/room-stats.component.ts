import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../chat.service'
import { AuthService } from '../../../auth/auth.service'

@Component({
  selector: 'app-room-stats',
  templateUrl: './room-stats.component.html',
  styleUrls: ['./room-stats.component.css']
})
export class RoomStatsComponent implements OnInit, OnDestroy {
  time =  new Date();
  interval;

  constructor(private chatService: ChatService, private authService: AuthService) { }


   isMobile = false;

   ngOnInit() {
    this.interval = setInterval(() => {
       this.time = new Date();
    }, 1000);

    this.isMobile = this.chatService.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.chatService.getIsMobile();
    };
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.interval = undefined;
  }


}
