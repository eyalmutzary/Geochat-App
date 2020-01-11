import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ChatService } from '../chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit, OnDestroy {

  time = new Date()
  messages = []
  private listener: Subscription;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.messages = this.chatService.messages;
    this.listener = this.chatService.messageListener.subscribe(()=>{
      this.messages = this.chatService.messages;
    })
  }

  ngOnDestroy(){
    this.listener.unsubscribe()
  }



}
