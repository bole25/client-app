import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Appointment} from '../../models/appointment.model';
import {Surgery} from '../../models/surgery.model';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './holiday-absence.component.html'
})

export class HolidayAbsenceComponent implements OnInit {

  selectedType: string;
  appointments: Set<Appointment>;
  surgeries: Set<Surgery>;
  users: Set<User>;
  user: User;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.appointments = new Set<Appointment>();
    this.surgeries = new Set<Surgery>();
    this.users = new Set<User>();
    this.user = new User();

  }


  ngOnInit(): void {
  }


}
