import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../../models/appointment.model';
import {Room} from '../../models/room.model';
import {Observable} from "rxjs";

@Injectable()
export class AcceptingAppService {
  private readonly getAllAppRequestsUrl: string;
  private readonly getFreeRoomsUrl: string;
  private readonly bookUrl: string;
  private readonly rejectUrl: string;

  constructor(private http: HttpClient) {
    this.getAllAppRequestsUrl = 'http://localhost:8080/admin/getAppointmentRequests';
    this.getFreeRoomsUrl = 'http://localhost:8080/admin/getFreeRoomsForAppointment';
    this.bookUrl = 'http://localhost:8080/admin/assignRoomToAppointment';
    this.rejectUrl = 'http://localhost:8080/admin/rejectAppointment';
  }

  getAppRequests(email: string) {
    return this.http.get<Set<Appointment>>(this.getAllAppRequestsUrl + '/' + email + '/');
  }

  getFreeRooms(id: string) {
    return this.http.get<Set<Room>>(this.getFreeRoomsUrl + '/' + id + '/');
  }

  bookRoom(roomid: number, appid: string) {
    return this.http.get<string>(this.bookUrl + '/' + roomid + '/' + appid + '/');
  }

  rejectApp(id: string): Observable<any>{
    return this.http.post(this.rejectUrl + '/' + id + '/', {});
  }
}
