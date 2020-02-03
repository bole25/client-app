import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from '../../models/room.model';

@Injectable()
export class RoomsService {
  private readonly  roomsUrl: string;

  constructor(private http: HttpClient) {
    this.roomsUrl = 'http://localhost:8080/cadmin/getRooms';

  }
  public getRooms(): Observable<Set<Room>> {
    return this.http.get<Set<Room>>(this.roomsUrl);
  }



}
