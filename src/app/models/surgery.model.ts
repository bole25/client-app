import {User} from './user.model';

export class Surgery {
  id: string;
  doctors: Set<User>;
  patient: User;
  startTime: Date;
  endTime: Date;
}
