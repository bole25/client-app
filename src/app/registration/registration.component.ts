import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-registration',
  templateUrl: '/registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

}
