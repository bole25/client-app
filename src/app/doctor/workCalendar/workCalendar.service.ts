import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointment} from '../../models/appointment.model';

@Injectable()
export class WorkCalendarService {
  private readonly appointmentUrl: string;

  constructor(private http: HttpClient) {
    this.appointmentUrl = 'http://localhost:8080/workCalendar/getAppointments';
  }

  public getAppointments(): Observable<Set<Appointment>> {
    return this.http.get<Set<Appointment>>(this.appointmentUrl);
  }


}
