import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointment} from '../../models/appointment.model';
import {RequestedAppDTO} from '../../models/dto/requestedAppDTO.model';

@Injectable()
export class ScheduleConfirmationService {
  private readonly app2ProcUrl: string;
  private readonly roomUrl: string;

  constructor(private http: HttpClient) {
    this.app2ProcUrl = 'http://localhost:8080/admin/getAppointmentRequests';
    this.roomUrl = 'http://localhost:8080/admin/assignRoomToAppointment';


  }
  public getAppointmentRequests(email: string): Observable<Set<RequestedAppDTO>> {
    return this.http.get<Set<RequestedAppDTO>>(this.app2ProcUrl + '/' + email + '/');

  }

  public assignRoomToAppointment(roomId: string, appId: string): Observable<string> {
    return this.http.get<string>(this.roomUrl + '/' + roomId + '/' + appId + '/');



  }




}
