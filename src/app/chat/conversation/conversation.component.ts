import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  messages = [{
    "sender": "me",
    "name": "Eyal Mutzary",
    "avatar": "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum, ex ut suscipit inventore nulla non sequi officiis, eius qui cumque sit eos, vero odit iure nemo earum totam unde!",
    "timeStamp": new Date(2020, 11, 22, 21,11)
  },
  {
    "sender": "foreign",
    "name": "Lorem Ipsum",
    "avatar": "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "timeStamp": new Date(2020, 11, 22, 21,11)
  },
  {
    "sender": "foreign",
    "name": "Eran Michaeli",
    "avatar": "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
    "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, officia. Ex, laborum? Nam, vel veritatis.",
    "timeStamp": new Date(2020, 11, 22, 21,12)
  },
  {
    "sender": "me",
    "name": "Eyal Mutzary",
    "avatar": "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum, ex ut suscipit inventore nulla non sequi officiis, eius qui cumque sit eos, vero odit iure nemo earum totam unde!",
    "timeStamp": new Date(2020, 11, 22, 21,35)
  },
  {
    "sender": "foreign",
    "name": "Lorem Ipsum",
    "avatar": "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "timeStamp": new Date(2020, 11, 22, 21,36)
  }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
