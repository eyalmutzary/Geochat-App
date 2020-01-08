import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../auth/user.model';
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  years: string[];
  error: string;
  isLoading = false;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
      let startFrom:number = 1930;
      this.years = Array((new Date()).getFullYear() + 1 - startFrom).fill(-1).map((x,i)=>{let year = i + startFrom; return year.toString()}).reverse();
   }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(50)]),
      'fullname': new FormControl(null, [Validators.required, Validators.pattern(`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`), Validators.maxLength(40)]),
      'password1': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'password2': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'region': new FormControl(null, [Validators.required]),
    });

  }

  onSubmit(){
    if (!this.signUpForm.valid) {
      return;
    }
    this.isLoading = true

    let user = new User(
      '',
      this.signUpForm.get('fullname').value,
      this.signUpForm.get('email').value,
      this.signUpForm.get('password1').value,
      this.signUpForm.get('region').value,
      [],
      '' // Avatar
    )
    
    let authObs = this.authService.signup(user)

    authObs.subscribe(response => {
      console.log(response)
      this.isLoading = false;
      this.router.navigate(['/login']);

    }, errorMessage => {
        console.log(errorMessage)

        if(errorMessage == '400'){
          this.errorMessage = "User already exists."
        }
        else{
          this.errorMessage = "Unkown error occurd, Please try again later."
        }    
        this.isLoading = false;

      }
    )
  }



}
