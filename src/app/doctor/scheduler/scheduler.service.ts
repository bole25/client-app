import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DayPilot} from 'daypilot-pro-angular';
import {Appointment} from '../../models/appointment.model';

@Injectable()
export class SchedulerService {

  private readonly appointmentUrl: string;


  constructor(private http: HttpClient) {
    this.appointmentUrl = 'http://localhost:8080/workCalendar/getAppointments';
  }

  public getAppointments(): Observable<Set<Appointment>> {
    return this.http.get<Set<Appointment>>(this.appointmentUrl);
  }

}
