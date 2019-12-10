import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { first } from 'rxjs/operators';
import {CcadminService} from '../users/ccadmin.service';
import {Clinic} from '../models/clinic.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-users',
  templateUrl: './ccadmin.component.html',
  styleUrls: ['./ccadmin.component.css']
})

export class CcadminComponent implements OnInit {
  clinics: Set<Clinic>;
  email: string;
  password: string;
  user: User;

  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminService) {
    this.user = new User();
    this.clinics = new Set<Clinic>();
  }

  ngOnInit(): void {
    this.service.getClinics().subscribe(data => {
      this.clinics = data;
    });
  }
}
