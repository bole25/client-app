import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Appointment} from '../../models/appointment.model';
import {Surgery} from '../../models/surgery.model';
import {User} from '../../models/user.model';
import {Vacationrequest} from '../../models/vacationrequest.model';
import {HolidayAbscenceService} from './holiday-abscence.service';

@Component({
  selector: 'app-users',
  templateUrl: './holiday-absence.component.html'
})

export class HolidayAbsenceComponent implements OnInit {

  type: string;
  /*appointments: Set<Appointment>;
  surgeries: Set<Surgery>;
  staff: Set<User>;
  user: User;*/
  startDate: Date;
  endDate: Date;
  vacationreqs: Set<Vacationrequest>;
  vacationreq: Vacationrequest;

  // submitted = false;


  constructor(private router: Router, private route: ActivatedRoute, private service: HolidayAbscenceService) {
    /*this.appointments = new Set<Appointment>();
    this.surgeries = new Set<Surgery>();
    this.staff = new Set<User>();
    this.user = new User();*/
    this.vacationreqs = new Set<Vacationrequest>();
    this.vacationreq = new Vacationrequest();
  }
  onSubmit(): void {

    this.service.save(this.vacationreq).subscribe(result => this.router.navigate(['/doctor']));
  }


  ngOnInit(): void {
    this.service.getReqs().subscribe(data => {this.vacationreqs = data; });

  }


}
