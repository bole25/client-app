import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Clinic} from '../../models/clinic.model';
import {Observable} from 'rxjs';
import {AppointmentType} from '../../models/appointmentType.model';
import {Doctor} from '../../models/doctor.model';
import {DoctorFreeTimes} from '../../models/dto/doctorFreeTimes.model';


@Injectable()
export class ScheduleAppService {
  private readonly clinicUrl: string;
  private readonly appTypeUrl: string;
  private readonly reqUrl: string;


  constructor(private http: HttpClient) {
    this.clinicUrl = 'http://localhost:8080/patient/getAvailableClinics';
    this.reqUrl = 'http://localhost:8080/patient/requestApp';
    this.appTypeUrl = 'http://localhost:8080/patient/getAppointmentTypes';

  }

  public getFilteredClinics(appType: AppointmentType, date: string): Observable<Set<Clinic>> {
    return this.http.post<Set<Clinic>>(this.clinicUrl + '/' + date, appType);
  }

  public getAppTypes(): Observable<Set<AppointmentType>> {
    return this.http.get<Set<AppointmentType>>(this.appTypeUrl);
  }

  public getDoctors(appType: AppointmentType, date: string, clinicName: string): Observable<Set<DoctorFreeTimes>> {
    return this.http.post<Set<DoctorFreeTimes>>(this.clinicUrl + '/' + date + '/' + clinicName, appType);
  }

  public requestApp(appType: AppointmentType, date: string, email: string , email2: string): Observable<string> {
    return this.http.post<string>(this.reqUrl + '/' + date + '/' + email + '/' + email2 + '/' , appType);
  }






}
