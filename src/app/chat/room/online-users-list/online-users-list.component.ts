import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-online-users-list',
  templateUrl: './online-users-list.component.html',
  styleUrls: ['./online-users-list.component.css']
})
export class OnlineUsersListComponent implements OnInit, OnDestroy {

  users;
  private listSub: Subscription;


  constructor(private chatService: ChatService) { }

  ngOnInit() {
    console.log("initiated")
    this.listSub = this.chatService.getUsersList().subscribe(data => {
      this.users = data
      console.log(data)
    })

  }

  ngOnDestroy(){
    this.listSub.unsubscribe();
  }

}
