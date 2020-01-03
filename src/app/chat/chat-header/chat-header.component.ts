import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {
  roomTitle: string = "Unkown Room Name"

  constructor() { }

  ngOnInit() {
  }

  openSettings() {
      // open logout, and group options
  }

}
