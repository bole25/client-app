import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './WorkCalFinal.component.html',
  styleUrls: ['./WorkCalFinal.component.scss']
})
export class WorkCalFinalComponent implements  OnInit {

  calendarPlugins = [dayGridPlugin]; // important!

  calendarEvents = [
    { title: 'event 1', date: '2020-02-03'  },
    { title: 'event 3', date: '2020-02-03' }
  ];

  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
  }

  ngOnInit(): void {
    // TODO implementirati servis koji ce ucitati eventove data=>calendarevents
  }









}
