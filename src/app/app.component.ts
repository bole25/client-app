import {Component, OnInit} from '@angular/core';
import {User} from './models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from './login/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from './registration/registration.service';
import {$, $$} from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-app';
  public registrationShow = false;
  public loginShow = true;
  public ulogovani: any;
  user: User;
  logemail: string;
  logpassword: string;
  user1: User;
  repeatedPassword: string;
  angForm: FormGroup;
  loginForm: FormGroup;
  private ulogovanifirstName: string;
  public activateinfo = false;

  constructor(private router: Router, private route: ActivatedRoute,
              private service: LoginService, private fb: FormBuilder, private regservice: RegistrationService) {
    this.user = new User();
    this.user1 = new User();
    this.createForm();
  }
  ngOnInit(): void {
    this.activateinfo = false;
    this.createForm();
  }

  get f() { return this.angForm.controls; }

  showLogin() {
    this.registrationShow = false;
    this.loginShow = true;
  }

  showRegistration() {
    this.registrationShow = true;
    this.loginShow = false;
  }




  onSubmit() {
    this.service.getUser(this.logemail, this.logpassword)
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('firstName', response.firstName);
          localStorage.setItem('secondName', response.lastName);
          this.ulogovani = localStorage.role;
          this.ulogovanifirstName = localStorage.firstName;

        },
        err => {
          if (err.status === 400) {
            alert('User with give email dose not exist');
          } else if (err.status === 406) {
            alert('Wrong password');
          }
        });
    console.log('AAAAAA:' + localStorage.jwt);
  }

  get ccadminloged() {
    if (this.ulogovani === 'CLINIC_CENTER_ADMIN') {
      return true;
    } else { return false; }
  }
  get someoneLoged() {
    if (localStorage.jwt == null) {
      return false;
    } else  { return true; }
  }

  get homepage() {
    if (location.pathname === '/') {
      return true;
    } else {return false; }
  }

  logout() {
    console.log('AAAAAA:' + localStorage.jwt);
    console.log('Uloga: ' + localStorage.role);
    console.log('page' + location.pathname);
    this.activateinfo = false;
    localStorage.clear();
  }

  private createForm() {
    this.angForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required]],

      ssn: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      phonenumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      repeatpassword: ['', Validators.required]
    });
  }
  get checkPassword() {
    return this.angForm.get('password').value === this.angForm.get('repeatpassword').value ? null : {notSame : true };
  }
  onSubmit2() {
    if (this.angForm.invalid) {
      alert('Please, fill all fields correctly');
      return;
    }
    this.regservice.save(this.user1).subscribe(result => this.router.navigate(['/']));
    this.angForm.reset();
    this.activateinfo = true;
    this.loginShow = true;
    this.registrationShow = false;
  }
}


