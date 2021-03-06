import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { RegistrationService } from './registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  user: User;
  repeatedPassword: string;

  angForm11: FormGroup;
  submitted = false;
  constructor(private router: Router, private route: ActivatedRoute, private service: RegistrationService, private fb: FormBuilder) {
    this.user = new User();
    this.createForm11();
  }
  get f() { return this.angForm11.controls; }
  onSubmit(): void {
      if (this.angForm11.invalid) {
        alert('Please, fill all fields correctly');
        return;
      }
      this.service.save(this.user).subscribe(result => this.router.navigate(['/users']));
    }

    get checkPassword() {
    return this.angForm11.get('password').value === this.angForm11.get('repeatpassword').value ? null : {notSame : true };
    }
  // refresh sign_up stranicu, i prebaci na neku drugu
   private createForm11() {
      this.angForm11 = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      ssn: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      phonenumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      repeatpassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
      this.createForm11();
  }
}
