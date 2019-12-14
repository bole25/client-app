import {Component, OnInit} from '@angular/core';
import {User} from './models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public registrationShow = false;
  public loginShow = true;
  email: string;
  password: string;
  user: User;


  constructor(private router: Router, private route: ActivatedRoute, private service: LoginService) {
    this.user = new User();
  }

  showLogin() {
    this.registrationShow = false;
    this.loginShow = true;
  }

  showRegistration() {
    this.registrationShow = true;
    this.loginShow = false;
  }

  onSubmit() {
    this.service.getUser(this.email, this.password)
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.token);
          console.log(this.user.firstName + ' ' + this.user.phoneNumber + ' ' + this.user.role);
        },
        err => {
          if (err.status === 400) {
            alert('User with give email dose not exist');
          } else if (err.status === 406) {
            alert('Wrong password');
          }
        });

  }
  get someoneLoged() {
    if (localStorage.getItem('firstName') != null && localStorage.getItem('firstName') !== '') {
      return true;
    } else {return false;}
  }
}


