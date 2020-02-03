import {User} from './user.model';

export class Appointment {

  startTime: Date;
  endTime: Date;
  patient: User;
  doctor: User;
  id: string;
  state: string;

}
