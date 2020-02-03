import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user.model';
import {Doctor} from '../../models/doctor.model';
import {Appointment} from '../../models/appointment.model';
import {ScheduleAppService} from '../scheduleApp/scheduleApp.service';
import {ScheduleAppComponent} from '../scheduleApp/scheduleApp.component';

@Component({
  selector: 'app-patient',
  templateUrl: './availableDocs.component.html'
})

export class AvailableDocsComponent  implements OnInit {

  doctor: Doctor;
  docs: Set<Doctor>;
  terms: Appointment;
  filteredString: string;
  filteredDoctors: Set<Doctor>;


  constructor(private router: Router, private route: ActivatedRoute, private service: ScheduleAppService) {
    this.docs = new Set<Doctor>();
    this.doctor = new Doctor();
    this.terms = new Appointment();

  }



  filterDoctors() {

  }

  ngOnInit(): void {

  }






}

