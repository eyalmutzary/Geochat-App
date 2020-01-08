import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';


import { User } from './user.model';
import { BehaviorSubject, throwError } from 'rxjs';

export interface AuthResponseData {
    user: {
      _id: string;
      fullname: string,
      email: string,
      region: string,
      createdAt: Date,
      updatedAt: Date
  },
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: User) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:3000/users',
        {
          fullname: user.fullname,
          email: user.email,
          password: user.password,
          region: user.region
        }
      )
      .pipe(
        catchError(this.handleError)
      );
  }


  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:3000/users/login',
        {
          email: email,
          password: password
        }
      )
      .pipe(
        catchError(this.handleError),
        tap<AuthResponseData>(resData => {
          this.handleAuthentication(
            resData.user._id,
            resData.user.fullname,
            resData.user.email,
            resData.user.region,
            resData.token
            );
        })
      );
  }

  autoLogin() {
    const userData: {
      _id: string,
    fullname: string,
    email: string,
    region: string,
    token: string

    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData._id,
      userData.fullname,
      userData.email,
      '',
      userData.region,
      userData.tokens,
      ''
    );
    if (loadedUser.tokens[0]) {
      this.user.next(loadedUser);
    }
  }

  logout() {
    console.log("Logging out...")
    this.http.post('http://localhost:3000/users/logout', {}).subscribe((resData) => console.log(resData))
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }

  private handleAuthentication(
    _id: string,
    fullname: string,
    email: string,
    region: string,
    token: string
    ) {
    let tokens: string[] = []
    tokens.push(token)
    const user = new User(_id, fullname , email,'', region, tokens);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    // if(errorRes.status === '404')
      // errorMessage = 'An unknown error occurred!';
    // if (!errorRes.error || !errorRes.error.error) {
    return throwError(errorRes.status);
    // }
    // switch (errorRes.error.error.message) {
    //   case 'EMAIL_EXISTS':
    //     errorMessage = 'This email exists already';
    //     break;
    //   case 'EMAIL_NOT_FOUND':
    //     errorMessage = 'This email does not exist.';
    //     break;
    //   case 'INVALID_PASSWORD':
    //     errorMessage = 'This password is not correct.';
    //     break;
    // }
    // return throwError(errorMessage);
  }
}
