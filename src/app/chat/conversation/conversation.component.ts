import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  messages = []
  listener;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.messages = this.chatService.messages;
    this.listener = this.chatService.messageListener.subscribe(()=>{
      this.messages = this.chatService.messages;
    })
  }



}
