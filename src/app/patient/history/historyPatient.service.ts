import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppointmentSurgeryDto} from '../../models/dto/appointmentSurgeryDto';
import {RatingDto} from '../../models/dto/ratingDto';

@Injectable()
export class HistoryPatientService {
  private readonly getHistoryUrl: string;
  private readonly rateUrl: string;

  constructor(private http: HttpClient) {
    this.getHistoryUrl = 'http://localhost:8080/patient/getPastAppointmentsAndSurgeries';
    this.rateUrl = 'http://localhost:8080/patient/rate';
  }

  getHistory() {
    return this.http.get<Set<AppointmentSurgeryDto>>(this.getHistoryUrl);
  }

  rate(rating: RatingDto) {
    return this.http.post(this.rateUrl, rating);
  }
}
