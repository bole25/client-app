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

export class RegistrationComponent{
  user: User;
  repeatedPassword: string;
  constructor(private router: Router, private route: ActivatedRoute, private service: RegistrationService) {
    this.user = new User();
  }
  onSubmit(): void {
    // validation
    this.service.save(this.user).subscribe(result => this.router.navigate(['/users']));
    // refresh sign_up stranicu, i prebaci na neku drugu
  }
}
