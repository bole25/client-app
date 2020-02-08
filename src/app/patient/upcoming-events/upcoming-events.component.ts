import { Component, OnInit } from '@angular/core';
import {AppointmentSurgeryDto} from '../../models/dto/appointmentSurgeryDto';
import {ProgressSpinnerMode, ThemePalette} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {UpcomingEventsService} from './upcoming-events.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  appointmentsSurgeries: Array<AppointmentSurgeryDto>;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  loading = true;

  constructor(private router: Router, private route: ActivatedRoute, private service: UpcomingEventsService) {
    this.appointmentsSurgeries = new Array<AppointmentSurgeryDto>();
  }

  ngOnInit() {
    this.service.getFuture().subscribe(data => {
      this.appointmentsSurgeries = Array.from(data);
      this.loading = false;
      });
  }

}
