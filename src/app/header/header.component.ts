import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  x = document.getElementById('log');

  isLoggedIn = false;
  constructor(private login: LoginService) {}
  get elementValue() {
    return this.x;
  }
  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedin();
  }

  // loggedin() {
  //   document.getElementById('log').innerHTML = 'Logout';
  // }
}
