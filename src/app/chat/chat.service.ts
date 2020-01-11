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
  locationListener = new Subject();
  userListListener = new Subject();
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
    this.userSub = this.authService.user.subscribe(user => {
          this.socket.emit('sendMessage', message, user._id, user.region);    
    });
    this.userSub.unsubscribe()
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
        this.userSub.unsubscribe()
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })
    
    return observable;
  }  

  newMessageAdded(message){
    this.messages.push(message)
    this.messageListener.next();
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

  findGeoRoom(){
    return this.http.get('http://ip-api.com/json/')
  }

  getUsersList(){
    console.log("waiting for users list...")
    let observable = new Observable(observer => {
      this.socket.on('sendUsersList', (data) => {
        console.log("got new users")
        observer.next(data);    
      }); 
    })     
    return observable;
  }

  // disconnect(){
  //   console.log("Disconnecting..")
  //   const user = JSON.parse(localStorage.getItem('userData'))
  //   console.log(user)
  //   this.socket.emit('disconnect', user.fullname, user.region)
  // }


}
