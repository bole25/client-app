import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user.model';
import {Appointment} from '../../models/appointment.model';
import {WorkCalFInalService} from './WorkCalFInal.service';

import {getFullYear} from 'ngx-bootstrap';
import {DatePipe} from '@angular/common';
import {Vacationrequest} from '../../models/vacationrequest.model';
import {Surgery} from '../../models/surgery.model';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './WorkCalFinal.component.html',
  styleUrls: ['./WorkCalFinal.component.scss']
})
export class WorkCalFinalComponent implements  OnInit {
  user: User;
  calendarPlugins = [dayGridPlugin]; // important!
  appointments: Set<Appointment>;
  vacations: Set<Vacationrequest>;
  surgeries: Set<Surgery>;
  defaultConfigurations: any;

  constructor(private router: Router, private route: ActivatedRoute, private service: WorkCalFInalService, public datepipe: DatePipe) {
    this.user = new User();
    this.appointments = new Set<Appointment>();
    this.vacations = new Set<Vacationrequest>();
    this.surgeries = new Set<Surgery>();
    this.defaultConfigurations = {

      editable: true,
      eventLimit: true,
      titleFormat: 'MMM D YYYY',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      }
    };
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
        this.calendarEvents.push({
          title: 'Appointment\n' + preuzmi.getHours() + ':' + preuzmi.getMinutes(),
          date: datum,
          color: 'red'
        });
      }
    });

    this.service.getVacations(this.user.email).subscribe(data => {
      this.vacations = data;
      for (const apt of this.vacations) {
        const preuzmi = (new Date(apt.startDate));
        const preuzmi2 = (new Date(apt.endDate));
        const datum = this.datepipe.transform(preuzmi, 'yyyy-MM-dd');
        // this.calendarEvents.push({title: 'Start vacation', date: datum, color: 'blue'});
        this.calendarEvents.push({title: 'Start vacation', date: datum, color: 'blue'});
        preuzmi.setDate(preuzmi.getDate() + 1);
        while (preuzmi < preuzmi2) {
          const datum3 = this.datepipe.transform(preuzmi, 'yyyy-MM-dd');
          this.calendarEvents.push({title: '', date: datum3, color: 'blue'});
          preuzmi.setDate(preuzmi.getDate() + 1);
        }
        const datum2 = this.datepipe.transform(preuzmi2, 'yyyy-MM-dd');
        // this.calendarEvents.push({title: 'Start vacation', date: datum, color: 'blue'});
        this.calendarEvents.push({title: 'End vacation', date: datum2, color: 'blue'});
      }
    });

    this.service.getSurgeries(this.user.email).subscribe(data => {
      this.surgeries = data;
      for (const apt of this.surgeries) {
        const preuzmi = (new Date(apt.startTime));
        const datum = this.datepipe.transform(preuzmi, 'yyyy-MM-dd');
        this.calendarEvents.push({title: 'Surgery\n' + preuzmi.getHours() + ':' + preuzmi.getMinutes(), date: datum, color: 'green'});
      }
    });

  }
}
