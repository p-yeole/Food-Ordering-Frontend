import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private service: UserService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public user = {
    name: '',
    password: '',
    email: '',
    contactNumber: '',
  };

  ngOnIt(): void {}

  formSubmit(): void {
    console.log(this.user);
    if (this.user.name == '' || this.user.name == null) {
      alert('User is required !!');
      return;
    }

    this.service.addUser(this.user).subscribe(
      // if(this.user.name=='' || this.user.password==null || this.user.email==''|| this.user.contactNumber==''){
      //   alert("Please enter all credentials!!");
      //   return;
      // }

      (data: any) => {
        // success
        console.log(data);
        alert('Succefully Registered! Please Login.');

        // Swal.fire(
        //   'Successfully done',
        //   'user is registered with id ' + data.id,
        //   'success'
        // );
      },
      (error) => {
        //error
        console.log(error);
        alert('something went wrong');
      }
    );
  }
}
