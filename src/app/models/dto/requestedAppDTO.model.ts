import {Appointment} from '../appointment.model';
import {Doctor} from '../doctor.model';
import {AppointmentType} from '../appointmentType.model';

export class RequestedAppDTO {
  id: string;
  startTime: string;
  appType: AppointmentType;
  docName: string;
  type: string;

}
