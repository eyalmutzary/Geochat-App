import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { ChatService } from '../chat/chat.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: string;
  currentLoc: string;


  constructor(private authService: AuthService, private chatService: ChatService ,private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    });
    this.chatService.findGeoRoom().subscribe(data => {
      this.currentLoc = data.city;
    })
  }


  onSubmit(){
    if (!this.loginForm.valid) {
      return;
    }

    this.isLoading = true;
    
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value

    const authObs = this.authService.login(email, password, this.currentLoc);

    authObs.subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(['/chat']);
      },
      errorMessage => {
        if(errorMessage == '400'){
          this.errorMessage = "Wrong email/password!"
        }
        else{
          this.errorMessage = "Unkown error. Please try again later."
        }
        this.isLoading = false;
      }
    );

    this.loginForm.reset();

  }

}
