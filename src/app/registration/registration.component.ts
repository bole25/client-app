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

export class RegistrationComponent {
  user: User;
  repeatedPassword: string;
  constructor(private router: Router, private route: ActivatedRoute, private service: RegistrationService) {
    this.user = new User();
  }
  onSubmit(): void {
    // validation
    if (this.user.firstName === '' || this.user.firstName == null) {
      alert('Field firstname can not be empty!');
    } else if (this.user.lastName === '' || this.user.lastName == null) {
      alert('Field lastname can not be empty!');
    } else if (this.user.email === '' || this.user.email == null) {
      alert('Field email can not be empty!');
    } else if (this.user.password === '' || this.user.password == null) {
      alert('Field password can not be empty!');
    } else if (this.repeatedPassword === '' || this.repeatedPassword == null) {
      alert('You must confirm the password!');
    } else if (this.user.address === '' || this.user.address == null) {
      alert('Field address can not be empty!');
    } else if (this.user.city === '' || this.user.city == null) {
      alert('Field city can not be empty!');
    } else if (this.user.country === '' || this.user.country == null) {
      alert('Field country can not be empty!');
    } else if (this.user.phoneNumber === '' || this.user.phoneNumber == null) {
      alert('Field phone number can not be empty!');
    } else if (this.user.ssn === '' || this.user.ssn == null) {
      alert('Field ssn can not be empty!');
    } else if (!(this.user.password === this.repeatedPassword)) {
      alert('Password must matches!');
    } else if (!this.user.email.includes('@') || !this.user.email.includes('.')) {
      alert('Email must be format mmm@example.dom!');
    } else {
      this.service.save(this.user).subscribe(result => this.router.navigate(['/users']));
      location.replace('/login');
    }
    // refresh sign_up stranicu, i prebaci na neku drugu
  }
}
