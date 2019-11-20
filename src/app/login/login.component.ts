import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {User} from '../models/user.model';
import {LoginService} from './login.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string;
  password: string;
  user: User;
  constructor(private router: Router, private route: ActivatedRoute, private service: LoginService) {
    this.user = new User();
  }
  onSubmit() {
    this.service.getUser(this.email, this.password).subscribe(data => {this.user = data; });
    if ( this.user == null) {
      alert('Login error');
    }
    alert( 'logged in user: ' + this.user.firstName + ' ' + this.user.lastName);
  }
}
