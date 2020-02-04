import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {ActivatedRoute, Router} from '@angular/router';
import {DarService} from '../../dar/dar.service';
import {User} from '../../models/user.model';
import {Drug} from '../../models/drug.model';
import {Appointment} from '../../models/appointment.model';
import {WorkCalFInalService} from './WorkCalFInal.service';
import {getFullYear} from 'ngx-bootstrap';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './WorkCalFinal.component.html',
  styleUrls: ['./WorkCalFinal.component.scss']
})
export class WorkCalFinalComponent implements  OnInit {
  user: User;
  calendarPlugins = [dayGridPlugin]; // important!
  appointments: Set<Appointment>;
  constructor(private router: Router, private route: ActivatedRoute, private service: WorkCalFInalService, public datepipe: DatePipe) {
    this.user = new User();
    this.appointments = new Set<Appointment>();
  }

  calendarEvents = [
    // { title: 'event 1', date: '2020-02-03'  },
    // { title: 'event 3', date: '2020-02-03' }
  ];

  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }

  ngOnInit(): void {
    // TODO implementirati servis koji ce ucitati eventove data=>calendarevents
    const user = JSON.parse(localStorage.getItem('user'));
    this.user = user;
    this.service.getAppointments(this.user.email).subscribe(data => {
      this.appointments = data;
      for (const apt of this.appointments) {
        const preuzmi = (new Date(apt.startTime));
        const datum = this.datepipe.transform(preuzmi, 'yyyy-MM-dd');
        this.calendarEvents.push({title: 'Appointment', date: datum, color: 'red'});
      }
    });

  }









}
