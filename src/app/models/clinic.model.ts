import {AppointmentType} from './appointmentType.model';
import {AppTypePriceDiscModel} from './appTypePriceDisc.model';

export class Clinic {
  clinicName: string;
  address: string;
  city: string;
  country: string;
  rating: number;
  appointmentTypePriceDiscounts: Set<AppTypePriceDiscModel>;
  selectedATPD: AppTypePriceDiscModel;
  description: string;

}
