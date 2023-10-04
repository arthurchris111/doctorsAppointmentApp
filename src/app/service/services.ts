import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signupDetails } from '../models/auth-models/signup.model';
import { loginDetails } from '../models/auth-models/login.model';

@Injectable({ providedIn: 'root' })
export class services {
  constructor(private http: HttpClient, private route: Router) {}

  // //saving user details to local storage
  addUser(user: any) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') as any);
      users = [user, users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(user));
  }

  //adding user details to firebase
  signupData(username: any, email: any, password: any) {
    const postData: signupDetails = {
      username: username,
      email: email,
      password: password,
    };
    this.http
      .post(
        'https://doctor-s-appointments-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  // getting user details from firebase
  loginDetails() {
    return this.http.get<any>(
      'https://doctor-s-appointments-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
