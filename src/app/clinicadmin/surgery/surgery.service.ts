import {Injectable} from '@angular/core';
import {Surgery} from '../../models/surgery.model';
import {HttpClient} from '@angular/common/http';
import {Room} from '../../models/room.model';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class SurgeryService {
  private readonly surgeryUrl: string;
  private readonly surgeryRoomsUrl: string;
  private readonly doctorsUrl: string;
  constructor(private http: HttpClient) {
    this.surgeryUrl = 'http://localhost:8080/admin/getSurgeryRequests';
    this.surgeryRoomsUrl = 'http://localhost:8080/rooms';
    this.doctorsUrl = 'http://localhost:8080/doctorssurgery';
  }

  getSurgeries() {
    return this.http.get<Set<Surgery>>(this.surgeryUrl);
  }
  getSurgeryRooms() {
    return this.http.get<Set<Room>>(this.surgeryRoomsUrl);
  }
  getDoctors(s: Surgery): Observable<any> {
    return this.http.get<Set<User>>(this.doctorsUrl + '/' + s.id);
  }

}
