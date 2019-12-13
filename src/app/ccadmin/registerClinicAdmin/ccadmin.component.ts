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
  selector: 'app-users',
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

  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminService) {
    this.user = new User();
    this.clinics = new Set<Clinic>();
    this.admins = new Set<User>();
  }

  ngOnInit(): void {
    this.service.getClinics().subscribe(data => {
      this.clinics = data;
      this.service.getCA().subscribe(data1 => {this.admins = data1; });
    });
  }

  onSubmit() {
    this.service.save(this.user, this.selectedclinic).subscribe(result => {
      this.router.navigate(['/ccadmin']);
      location.reload();
      });
  }
}
