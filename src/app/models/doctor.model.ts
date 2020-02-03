import {User} from './user.model';
import {Appointment} from './appointment.model';

export class Doctor extends User {

  rating: number;
  user: User;
  appointment: Appointment;
}
