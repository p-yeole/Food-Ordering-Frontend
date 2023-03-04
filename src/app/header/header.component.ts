import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  x = document.getElementById('log');
  constructor() {}
  get elementValue() {
    return this.x;
  }

  // loggedin() {
  //   document.getElementById('log').innerHTML = 'Logout';
  // }
}
