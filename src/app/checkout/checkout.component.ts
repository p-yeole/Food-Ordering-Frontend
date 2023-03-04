import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  constructor(
    private http: HttpClient,
    private login: LoginService,
    private router: Router
  ) {}
  onSubmit() {
    this.http.post('/api/users', this.user).subscribe(
      (response) => {
        alert('Order Placed Successfully');
      },
      (error) => {
        console.error('Error saving user:', error);
        alert('Order Failure');
      }
    );
  }
  public user = {
    name: '',
    mobileNumber: '',
    address: '',
  };
}
