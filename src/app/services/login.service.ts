import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}


  //login user. set token in localstorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    this.loginStatusSubject.next(true);
    return true;
  }

  //isLogin : user is logged in or not.
  public isLoggedin() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout: remove token from local storage

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  // set userDetail
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getuser
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //get user role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
