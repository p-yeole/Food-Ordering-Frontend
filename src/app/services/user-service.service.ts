import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  public addUser(user: any) {
    return this.http.post(`${baseUrl}/user/signup`, user);
  }
  // public login(data: any) {
  //   return this.http.post(`${baseUrl}/user/login`, data);
  // }
  public login(data: any) {
    return this.http.post(`${baseUrl}/user/login`, data);
  }
}
