import {User} from './user.model';

export class Appointment {

  startTime: string;
  endTime: string;
  patient: User;
  doctor: User;
  id: string;

}
