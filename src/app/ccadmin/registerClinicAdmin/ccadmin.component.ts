import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user.model';
import { first } from 'rxjs/operators';
import {CcadminService} from './/ccadmin.service';
import {Clinic} from '../../models/clinic.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ccadmin',
  templateUrl: './ccadmin.component.html',
  styleUrls: ['./ccadmin.component.css']
})

export class CcadminComponent implements OnInit {
  clinics: Set<Clinic>;
  admins: Set<User>;
  email: string;
  password: string;
  user: User;
  selectedclinic: string;
  createAdmin: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminService, private formBuilder: FormBuilder) {
    this.user = new User();
    this.clinics = new Set<Clinic>();
    this.admins = new Set<User>();
  }

  ngOnInit(): void {
    this.service.getClinics().subscribe(data => {
      this.clinics = data;
      this.service.getCA().subscribe(data1 => {this.admins = data1; });
    });
    this.createForm();
  }

  onSubmit() {
    if (this.createAdmin.invalid) {
      alert('Please, fill all fields correctly');
      return;
    }
    this.service.save(this.user, this.selectedclinic).subscribe(result => {
      alert('Successfully');
      this.router.navigate(['/newCCA']);
      });
  }

  private createForm() {
    this.createAdmin = this.formBuilder.group({
      firstnameca: ['', [Validators.required]],
      lastnameca: ['', [Validators.required]],
      emailca: ['', [Validators.required, Validators.email]],
      passwordca: ['', [Validators.required, Validators.minLength(6)]],
      ssnca: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      clinicca: ['', [Validators.required]]
    });
  }
  get f() { return this.createAdmin.controls; }
}
