import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppointmentSurgeryDto} from '../../models/dto/appointmentSurgeryDto';

@Injectable()
export class UpcomingEventsService {
  private readonly getFutureUrl: string;

  constructor(private http: HttpClient) {
    this.getFutureUrl = 'http://localhost:8080/patient/getFutureAppointmentsAndSurgeries';
  }

  getFuture() {
    return this.http.get<Set<AppointmentSurgeryDto>>(this.getFutureUrl);
  }

}
