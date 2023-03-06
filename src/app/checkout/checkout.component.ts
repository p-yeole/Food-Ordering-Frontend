import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  cart!: Cart;
  private user = {
    name: '',
    contactNumber: '',
    address: '',
    totalPrice: null,
  };
  constructor(private http: HttpClient, private router: Router) {}
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

  // totalPrice = this.cart.totalPrice;

  formSubmit() {
    window.alert(
      'Thanks for placing the order. Your Order will be delivered shortly. Please pay in cash!!'
    );
    //console.log(this.cart.totalPrice);
    //const items = JSON.parse(localStorage.getItem('items'));
    localStorage.setItem('items', JSON.stringify([]));
    
    //add a method to print bill along with product name and its amount

    // function generateEmailBody() {
    //   const items = JSON.parse(localStorage.getItem('items'));
    //   let body = 'Here are the details of your order:\n\n';
    //   body += 'Items:\n';
    //   items.forEach((item) => {
    //     body += `- ${item.name}: ${item.quantity}\n`;
    //   });
    //   body += '\n';
    //   body += `Total cost: $${this.cart.totalPrice}\n\n`;
    //   body += 'Please let us know if you have any questions or concerns.\n\n';
    //   body += 'Thank you for your business!';
    //   return body;
    // }

    // function sendEmail() {
    //   const email = this.Receiver.email;
    //   const subject = 'Order Details';
    //   const body = generateEmailBody();
    //   window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    //     subject
    //   )}&body=${encodeURIComponent(body)}`;
    // }

    // sendEmail();

    this.router.navigateByUrl('/home');
  }
}
