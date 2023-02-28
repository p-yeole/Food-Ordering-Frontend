import { Component, OnInit } from '@angular/core';
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
      (data: any) => {
        // success
        console.log(data);
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
        // alert("something went wrong")
        // this.snack.open('something went wrong !!', 'ok', {
        //   duration: 3000,
        // });
      }
    );
  }

  //this.User
}
