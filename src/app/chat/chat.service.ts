import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as io from 'socket.io-client';

import { AuthService } from '../auth/auth.service'


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messageListener = new Subject<string>();
  messages = [];
  private url = 'http://localhost:3000';  
  private socket = io('http://localhost:3000')
  private userSub: Subscription;


  constructor(public http: HttpClient, private authService: AuthService) {}

  joinRoom(){
    const user = JSON.parse(localStorage.getItem('userData'))
    this.socket.emit('join', user.region, user.fullname)
  }

  sendMessage(message){
    // this.findGeoRoom().subscribe((res) => {
    //   console.log(res)
    // })

    this.userSub = this.authService.user.subscribe(user => {
          this.socket.emit('sendMessage', message, user._id);    
    });
  }
  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        this.userSub = this.authService.user.subscribe(user => {
          if(data.senderId == user._id){
            data.sender = "me";
          }
          else if(!data.senderId){
            data.sender = "neutral";
          }
          else{
            data.sender = "foreign"
          }
        });

        observer.next(data);    
      });
      return () => {
        this.socket.disconnect("Eyal", "Israel");
      };  
    })     
    return observable;
  }  

  newMessageAdded(message){
    this.messages.push(message)
    this.messageListener.next();
  }

  findGeoRoom(){
    // fetch('http://ip-api.com/json/').then(
    //   (response) => {
    //     response.json().then(function(data){
    //       console.log(data)
    //     })
    //   }
    // )
    return this.http.get('http://ip-api.com/json/')
  }

  getIsMobile() {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }


}
