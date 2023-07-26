import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class services {
  constructor(private http: HttpClient, private route: Router) {}

  //saving user details to local storage
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



}
