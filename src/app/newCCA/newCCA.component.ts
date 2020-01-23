import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RegistrationService} from '../registration/registration.service';
import {NewCCAService} from './newCCA.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-newCCA',
  templateUrl: './newCCA.component.html',
  styleUrls: ['./newCCA.component.css']
})

export class NewCCAComponent implements OnInit {
  user: User;
  repeatedPassword: string;

  angForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private route: ActivatedRoute, private service: NewCCAService, private fb: FormBuilder) {
    this.user = new User();
    this.createFormcca();
  }
  get f() { return this.angForm.controls; }
  onSubmit(): void {
    if (this.angForm.invalid) {
      alert('Please, fill all fields correctly');
      return;
    }
    this.service.save(this.user).subscribe(result => this.router.navigate(['/users/newcca']));
  }

  get checkPassword() {
    return this.angForm.get('password').value === this.angForm.get('repeatpassword').value ? null : {notSame : true };
  }
  // refresh sign_up stranicu, i prebaci na neku drugu
  private createFormcca() {
    this.angForm = this.fb.group({
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
    this.createFormcca();
  }

}
