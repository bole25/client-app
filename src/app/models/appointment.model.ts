import {User} from './user.model';
import {AppointmentType} from './appointmentType.model';

export class Appointment {

  startTime: Date;
  endTime: Date;
  patient: User;
  type: AppointmentType;
  doctor: User;
  id: string;
  state: string;

}
