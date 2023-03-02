import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private service: UserService,
    private router: Router,
    private login: LoginService
  ) {}
  public user = {
    email: '',
    password: '',
  };

  ngOnInit(): void {}
  formSubmit(): void {
    console.log('OK');
    // if (this.user.email == '' || this.user.password == null) {
    //   alert('User is required !!');
    //   return;
    // }
    this.service.login(this.user).subscribe(
      (data: any) => {
        // success
        console.log(data);
        console.log(this.login.isLoggedin());
        console.log(this.login.loginUser(data.token));
        if (this.login.loginUser(data.token)) {
          //this.login.isLoggedin()
          window.location.href = '/';
        }
      },
      (error) => {
        //error
        console.log(error);
      }
    );
  }
}
