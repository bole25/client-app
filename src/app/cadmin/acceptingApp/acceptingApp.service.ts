import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../../models/appointment.model';
import {Room} from '../../models/room.model';
import {Observable} from 'rxjs';
import {Surgery} from '../../models/surgery.model';
import {AppointmentSurgeryDto} from '../../models/dto/appointmentSurgeryDto';

@Injectable()
export class AcceptingAppService {
  private readonly getAllAppRequestsUrl: string;
  private readonly getAllSurgeryRequestsUrl: string;
  private readonly getFreeRoomsUrl: string;
  private readonly bookUrl: string;
  private readonly rejectAppUrl: string;
  private readonly rejectSurgUrl: string;

  constructor(private http: HttpClient) {
    this.getAllAppRequestsUrl = 'http://localhost:8080/admin/getAppointmentAndSurgeryRequests';
    this.getAllSurgeryRequestsUrl = 'http://localhost:8080/admin/getSurgeryRequests';
    this.getFreeRoomsUrl = 'http://localhost:8080/admin/getFreeRoomsForAppointment';
    this.bookUrl = 'http://localhost:8080/admin/assignRoomToAppointment';
    this.rejectAppUrl = 'http://localhost:8080/admin/rejectAppointment';
    this.rejectSurgUrl = 'http://localhost:8080/admin/rejectSurgery';
  }

  getRequests() {
    return this.http.get<Set<AppointmentSurgeryDto>>(this.getAllAppRequestsUrl);
  }

  getFreeRooms(id: string, type: string) {
    return this.http.get<Set<Room>>(this.getFreeRoomsUrl + '/' + id + '/' + type + '/');
  }

  bookRoom(roomid: number, appid: string) {
    return this.http.get<string>(this.bookUrl + '/' + roomid + '/' + appid + '/');
  }

  rejectApp(id: string): Observable<any> {
    return this.http.post(this.rejectAppUrl + '/' + id + '/', {});
  }

  getSurgeries(email: string) {
    return this.http.get<Set<Surgery>>(this.getAllSurgeryRequestsUrl + '/' + email + '/');
  }

  rejectSurgery(id: string) {
    return this.http.post(this.rejectSurgUrl + '/' + id + '/', {});
  }
}
