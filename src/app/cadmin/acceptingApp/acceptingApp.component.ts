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
  showApps = false
  showrooms = false;
  freerooms: Set<Room>;
  selectedAppointementId: string;
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
      this.loading = false;
      this.showApps = true;
    });

  }


  getfreerooms(a: AppointmentSurgeryDto) {
    this.loading = true;
    let type: string;
    if (a.appointmentType === 'Surgery') {
      type = 'SURGERY';
    } else {
      type = 'APPOINTMENT';
    }
    this.service.getFreeRooms(a.id, type).subscribe(data => {
      this.selectedAppointementId = a.id;
      this.freerooms = data;
      this.loading = false;
      this.showrooms = true;
      window.scrollTo(0, document.body.scrollHeight);
    });
  }
  /*
  back() {
    this.showrooms = false;
  }
*/
  bookRoom(roomId: number) {
    // tslint:disable-next-line:max-line-length
    this.loading = true;
    let type: string;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.appointmentsSurgeries.length; i++) {
      if (this.appointmentsSurgeries[i].id === this.selectedAppointementId) {
        if (this.appointmentsSurgeries[i].appointmentType === 'Surgery'){
          type = 'Surgery';
        } else {
          type = 'Appointment';
        }
      }
    }
    this.service.bookRoom(roomId, this.selectedAppointementId, type).subscribe(data => {
      this.service.getRequests().subscribe(data1 => {
        this.appointmentsSurgeries = Array.from(data1);
        this.showrooms = false;
        this.loading = false;
        alert('Room successfully booked');
      });
    });
  }

  reject(id: string) {
    let aps: AppointmentSurgeryDto;
    // tslint:disable-next-line:max-line-length prefer-for-of
    for (let i = 0; i < this.appointmentsSurgeries.length; i++) {
      if (this.appointmentsSurgeries[i].id === id) {
        aps = this.appointmentsSurgeries[i];
      }
    }
    if (aps.appointmentType === 'Surgery') {
      this.loading = true;
      this.service.rejectSurgery(aps.id).subscribe( data => {
        this.service.getRequests().subscribe(data2 => {
          this.appointmentsSurgeries = Array.from(data2);
          this.loading = false;
          alert('Surgery successfully removed');
        });
      });
    } else {
      this.loading = true;
      this.service.rejectApp(aps.id).subscribe( data => {
        this.service.getRequests().subscribe(data2 => {
          this.appointmentsSurgeries = Array.from(data2);
          this.loading = false;
          alert('Appointment successfully removed');
        });
      });
    }
  }
}
