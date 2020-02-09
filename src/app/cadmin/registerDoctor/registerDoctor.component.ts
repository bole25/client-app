import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user.model';
import { first } from 'rxjs/operators';
import {Clinic} from '../../models/clinic.model';
import {RegisterDoctorService} from './registerDoctor.service';
import {Room} from '../../models/room.model';
import {Doctor} from '../../models/doctor.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-registerDoctor',
  templateUrl: './registerDoctor.component.html'
})

export class RegisterDoctorComponent implements OnInit {
  clinics: Set<Clinic>;
  doctors: Set<User>;
  email: string;
  password: string;
  user: User;
  selectedclinic: string;
  registerDoctor: FormGroup;
  filteredString: string;
  filteredDoctors: Set<User>;
  emailcontent: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: RegisterDoctorService) {
    this.user = new User();
    this.clinics = new Set<Clinic>();
    this.doctors = new Set<User>();
    this.filteredDoctors = new Set<User>();
  }

  ngOnInit(): void {
    this.service.getClinics().subscribe(data => {
      this.clinics = data;
      this.service.getDoctors().subscribe(data1 => {this.doctors = data1; this.filteredDoctors = data1; });
    });
    // this.createForm();
  }

  onSubmit() {

    this.service.save(this.user, this.selectedclinic).subscribe(result => {
      alert('Successfully');
      this.router.navigate(['/registerDoctor']);
      location.reload();
    });
  }

  /* private createForm() {
    this.registerDoctor = this.formBuilder.group({
      firstnameca: ['', [Validators.required]],
      lastnameca: ['', [Validators.required]],
      emailca: ['', [Validators.required, Validators.email]],
      passwordca: ['', [Validators.required, Validators.minLength(6)]],
      ssnca: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      clinicca: ['', [Validators.required]]
    });
  }
  get f() { return this.registerDoctor.controls; }*/
  filterChange() {
    this.filteredDoctors = new Set<User>();
    for (const d of this.doctors) {
      if (d.firstName.toLowerCase().includes(this.filteredString.toLowerCase())) {
        this.filteredDoctors.add(d);
      }
    }



  }

  delete_Doctor(email: string) {
    this.service.removeDoctor(email, this.emailcontent).subscribe(result => this.router.navigate(['deleteDoctor']));

  }
}
