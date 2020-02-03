import {User} from './user.model';

export class Surgery {
  id: string;
  patient: User;
  startTime: Date;
  endTime: Date;
}
