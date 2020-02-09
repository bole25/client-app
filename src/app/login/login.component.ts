import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {User} from '../models/user.model';
import {LoginService} from './login.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  logemail: string;
  logpassword: string;
  user: User;

  constructor(private router: Router, private route: ActivatedRoute, private service: LoginService) {
    this.user = new User();
  }

  onSubmit() {
    this.service.getUser(this.logemail, this.logpassword)
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('firstName', response.firstName);
          localStorage.setItem('lastName', response.lastName);
      },
        err => {
          if (err.status === 400) {
            alert('User with give email dose not exist');
          } else if (err.status === 406) {
            alert('Wrong password');
          }
        });

  }
}
