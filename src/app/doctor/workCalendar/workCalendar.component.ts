import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import {HttpClient} from '@angular/common/http';



// declare var $: any;

@Component({
  selector: 'app-full-calendar',
  templateUrl: './workCalendar.component.html'
})

export class WorkCalendarComponent implements OnInit {

  @Input()
  eventData: any;
  defaultConfigurations: any;

  @Input()
  set configurations(config: any) {
    if (config) {
      this.defaultConfigurations = config;
    }
  }

  constructor() {

    this.defaultConfigurations = {
      editable: true,
      eventLimit: true,
      titleFormat: 'MMM D YYYY',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day'
      },
      views: {
        agenda: {
          eventLimit: 12
        }
      },
      allDaySlot: true,
      slotDuration: moment.duration('00:15:00'),
      slotLabelInterval: moment.duration('01:00:00'),
      firstDay: 1,
      selectable: true,
      selectHelper: true,
      // events: this.eventData,
      events: this.eventData,


      dayClick: (date, jsEvent, activeView) => {
        this.dayClick(date, jsEvent, activeView);
      },

      eventDragStart: (timeSheetEntry, jsEvent, ui, activeView) => {
        this.eventDragStart(
          timeSheetEntry, jsEvent, ui, activeView
      );
      },
      eventDragStop: (timeSheetEntry, jsEvent, ui, activeView) => {
        this.eventDragStop(
          timeSheetEntry, jsEvent, ui, activeView
        );
      },
    };




    this.eventData = [
      {
        title: 'event1',
        date: '2019-05-12'
      },
      {
        title: 'event2',
        start: moment(),
        end: moment().add(2, 'days')

      },
    ];


  }


  ngOnInit(): void {


    $('#calendar').fullCalendar(this.defaultConfigurations);
    /*{
       header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      navLinks: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'This is your',
          start: '2019-03-03T12:30:00',
          color: '#f9c66a' // override!
        },
        {
          title: 'Your meeting with john',
          start: '2019-03-07T12:30:00',
          end: '2019-03-09',
          color: '#019efb'
        },
        {
          title: 'This is Today',
          start: '2019-03-12T12:30:00',
          allDay: false, // will make the time show,
          color: '#57cd5f'
        }
      ],  // request to load current events
    });*/
  }

  dayClick(date, jsEvent, activeView) {

    console.log('day click');
  }
  eventDragStart(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag start');
  }
  eventDragStop(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag end');
  }
}
