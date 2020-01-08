import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service'
// import * as io from 'socket.io';


@Component({
  selector: 'app-writing-area',
  templateUrl: './writing-area.component.html',
  styleUrls: ['./writing-area.component.css']
})
export class WritingAreaComponent implements OnInit {
  rows = "3";
  // socket;
  // observable: Observable<string>;
  message;
  messages = [];
  connection;
  @ViewChild('writingArea', {static: true}) myInput: ElementRef;

  constructor(public chatService: ChatService) { 
    // this.socket = io('http://localhost:3000'); 
  }
  

  onSendMessage(){
    this.chatService.sendMessage(this.myInput.nativeElement.value);
    this.message = '';
    this.myInput.nativeElement.value = ''
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      // this.messages.push(message);
      this.chatService.newMessageAdded(message)
    })
    
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
