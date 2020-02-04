import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Appointment} from '../../models/appointment.model';
import {Observable} from 'rxjs';
import {Vacationrequest} from '../../models/vacationrequest.model';
import {Surgery} from '../../models/surgery.model';

@Injectable()
export class WorkCalFInalService {
  private readonly appointmentsUrl: string;
  private readonly vacationsUrl: string;
  private readonly surgeryUrl: string;
  constructor(private http: HttpClient) {
    this.appointmentsUrl = 'http://localhost:8080/getAppointments';
    this.vacationsUrl = 'http://localhost:8080/getVacations';
    this.surgeryUrl = 'http://localhost:8080/getSurgeries';
  }

  getAppointments(email: string): Observable<Set<Appointment>> {
    return this.http.get<Set<Appointment>>(this.appointmentsUrl + '/' + email + '/');
  }

  getVacations(email: string): Observable<Set<Vacationrequest>> {
    return this.http.get<Set<Vacationrequest>>(this.vacationsUrl + '/' + email + '/');
  }

  getSurgeries(email: string): Observable<Set<Surgery>> {
    return this.http.get<Set<Surgery>>(this.surgeryUrl + '/' + email + '/');
  }



}
