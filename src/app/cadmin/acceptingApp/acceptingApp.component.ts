import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user.model';
import {AcceptingAppService} from './acceptingApp.service';
import {Appointment} from '../../models/appointment.model';
import {DatePipe} from '@angular/common';
import {Room} from '../../models/room.model';
import {Surgery} from '../../models/surgery.model';
import {AppointmentSurgeryDto} from '../../models/dto/appointmentSurgeryDto';
import {ProgressSpinnerMode, ThemePalette} from '@angular/material';

@Component({
  selector: 'app-appointments',
  templateUrl: './acceptingApp.component.html',
  styleUrls: ['./acceptingApp.component.css']
})

export class AcceptingAppComponent implements OnInit {
  appointmentsSurgeries: Array<AppointmentSurgeryDto>;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  loading = true;
  freerooms: Set<Room>;
  idclicked
  user: User;

  constructor(private router: Router, private route: ActivatedRoute, private service: AcceptingAppService, private datepipe: DatePipe) {
    this.appointmentsSurgeries = new Array<AppointmentSurgeryDto>();
    this.user = new User();
    this.freerooms = new Set<Room>();
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.user = user;
    this.service.getRequests().subscribe(data => {
      this.appointmentsSurgeries = Array.from(data);
      this.loading=false;
    });

  }


  /*getfreerooms(id: string, type: string) {
    this.idclicked = id;
    this.service.getFreeRooms(id, type).subscribe(data => {
      this.freerooms = data;
      this.showrooms = true;
    });
  }
/*
  back() {
    this.showrooms = false;
  }

  bookRoom(id: number, idclicked: string) {
    // tslint:disable-next-line:max-line-length
    this.service.bookRoom(id, idclicked).subscribe(data => {
      alert('Room booked');
      this.service.getAppRequests(this.user.email).subscribe(data1 => {
        this.appointments = data1;
      });
      this.showrooms = false;
    });
  }

  reject(id: string, app: boolean) {
    // tslint:disable-next-line:max-line-length
    if (app) {
      this.service.rejectApp(id).subscribe(data => {
        this.service.getAppRequests(this.user.email).subscribe(data1 => {
          this.appointments = data1;
        });
        this.service.getSurgeries(this.user.email).subscribe(data1 => {
          this.surgeries = data1;
        });
      });
    } else {
      this.service.rejectSurgery(id).subscribe(data => {
        this.service.getAppRequests(this.user.email).subscribe(data1 => {
          this.appointments = data1;
        });
        this.service.getSurgeries(this.user.email).subscribe(data1 => {
          this.surgeries = data1;
        });
      });
    }
  }
  */
}
