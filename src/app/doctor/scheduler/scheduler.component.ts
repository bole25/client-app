import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {DayPilotSchedulerComponent} from 'daypilot-pro-angular';
import {SchedulerService} from './scheduler.service';


@Component({
  selector: 'app-scheduler-component',
  template: `
  <div class="body">
    <h1>Scheduler</h1>
    <daypilot-scheduler [config]="config" [events]="events" #scheduler></daypilot-scheduler>
  </div>
  `,
  styles: [`
  .body {
    padding: 10px;
  }
  `]
})
export class SchedulerComponent implements AfterViewInit {

  @ViewChild('scheduler', {static: false})
  scheduler: DayPilotSchedulerComponent;


  events: any;
  from: any;
  to: any;

  config: any = {
    timeHeaders : [
      {groupBy: 'Month', format: 'MMMM yyyy'},
      {groupBy: 'Day', format: 'd'}
    ],
    days: 31,
    startDate: '2019-10-01',
    scale: 'Day'
  };

  constructor(private ds: SchedulerService) {}

  ngAfterViewInit(): void {
    this.ds.getAppointments().subscribe(result => this.config.startDate = result);

    this.from = this.scheduler.control.visibleStart();
    this.to = this.scheduler.control.visibleEnd();

  }

}
