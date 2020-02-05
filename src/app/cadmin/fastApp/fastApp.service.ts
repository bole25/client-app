import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppointmentType} from '../../models/appointmentType.model';
import {Observable} from 'rxjs';
import {Room} from '../../models/room.model';
import {User} from '../../models/user.model';
import {Doctor} from '../../models/doctor.model';
import {stringify} from 'querystring';
import {Appointment} from '../../models/appointment.model';

@Injectable()
export class FastAppService {
  private readonly appointmetTypesUrl: string;
  private readonly freeDrUrl: string;
  private readonly freeRoomsUrl: string;
  private readonly makeappurl: string;

  constructor(private http: HttpClient) {
    this.appointmetTypesUrl = 'http://localhost:8080/admin/getClinicAppointmentTypes';
    this.freeDrUrl = 'http://localhost:8080/admin/getAvailablDoctors';
    this.freeRoomsUrl = 'http://localhost:8080/admin/getAvailablRooms';
    this.makeappurl = 'http://localhost:8080/admin/addPredefinedAppointment';
  }

  getAppointmentTypes(email: string): Observable<any> {
    return this.http.get<Set<AppointmentType>>(this.appointmetTypesUrl + '/' + email + '/');
  }

  // tslint:disable-next-line:variable-name
  getFreeDr(appType: AppointmentType, date: string, email: string ): Observable<any> {
    return this.http.post<any>(this.freeDrUrl + '/' + date + '/' + email + '/', appType);
  }


  getFreeRooms( date: string, email: string) {
    return this.http.get<Set<Room>>(this.freeRoomsUrl + '/' + date + '/' + email + '/');
  }

  makefa(app: Appointment, email: string): Observable<any> {
    return this.http.post<any>(this.makeappurl + '/' + email + '/', app);
  }
}
