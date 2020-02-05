import {User} from './user.model';
import {AppointmentType} from './appointmentType.model';
import {Doctor} from './doctor.model';
import {Room} from './room.model';

export class Appointment {

  startTime: Date;
  endTime: Date;
  patient: User;
  type: AppointmentType;
  doctor: Doctor;
  room: Room;
  id: string;
  state: string;

}
