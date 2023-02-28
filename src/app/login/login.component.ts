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
        // this.router.navigateByUrl('/' + this.user);
        // this.router.navigate(['app-home']);
        // alert("success")
        // Swal.fire(
        //   'Successfully done',
        //   'user is registered with id ' + data.id,
        //   'success'
        // );
      },
      (error) => {
        //error
        console.log(error);
        // this.router.navigate(['app-home']);
        // alert("something went wrong")
        // this.snack.open('something went wrong !!', 'ok', {
        //   duration: 3000,
        // });
      }
    );
    // request to server to generate token
    this.login.generateToken(this.user).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        //login...
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);

          //redirect ... ADMIN : admin-dashboard
          //redirect ... NORMAL : mormal-dashboard
          // if (this.login.getUserRole() == 'ADMIN') {
          window.location.href = '/';
          //   this.router.navigate(['admin']);
          //   this.login.loginStatusSubject.next(true);
          // } else if (this.login.getUserRole() == 'NORMAL') {
          //   // window.location.href = '/user-dashboard';
          //   this.router.navigate(['user-dashboard/0']);
          //   this.login.loginStatusSubject.next(true);
          // } else {
          //   this.login.logout();
          // }
          // if(this.login.)
        });
      },
      (error) => {
        console.log('Error');
        console.log(error);
        // this.snack.open('Invalid Details !!', 'try again', {
        //   duration: 3000,
        // });
      }
    );
  }
}
