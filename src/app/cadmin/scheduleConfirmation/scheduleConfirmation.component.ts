import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AppointmentType} from '../../models/appointmentType.model';
import {DoctorFreeTimes} from '../../models/dto/doctorFreeTimes.model';
import {Appointment} from '../../models/appointment.model';
import {ScheduleConfirmationService} from './scheduleConfirmation.service';
import {User} from '../../models/user.model';
import {RequestedAppDTO} from '../../models/dto/requestedAppDTO.model';
import {Room} from '../../models/room.model';


@Component({
  selector: 'app-cadmin',
  templateUrl: './scheduleConfirmation.component.html',

})

export class ScheduleConfirmationComponent implements OnInit {
  appType: AppointmentType;
  appointments: Set<RequestedAppDTO>;
  email: string;
  cadmin: User;
  cadmins: Set<User>;
  rooms: Set<Room>;
  room: Room;
  showAppTypes: boolean;
  showRooms: boolean;

  constructor(protected router: Router, protected route: ActivatedRoute, private service: ScheduleConfirmationService) {
    this.appType = new AppointmentType();
    this.appointments = new Set<RequestedAppDTO>();
    this.cadmins = new Set<User>();
    this.rooms = new Set<Room>();
    this.room = new Room();


  }

  ngOnInit(): void {
    this.cadmin = JSON.parse(localStorage.getItem('user'));
    let email: string;
    email = this.cadmin.email;
    this.service.getAppointmentRequests(email).subscribe(data1 => {
      this.appointments = data1;
    });

    console.log(this.cadmin.email);
  }


  assign(event) {
    alert('opala');
    const elementId: string = (event.target as Element).id;
    // const elementId: string = event.target.id;
    this.service.assignRoomToAppointment(this.room.id.toString(), elementId).subscribe(data => {

      alert('to fujjjj');
    });

  }

  reject(event) {

  }

  bookRoom(event) {

  }
}
