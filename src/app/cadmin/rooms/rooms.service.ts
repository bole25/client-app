import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from '../../models/room.model';

@Injectable()
export class RoomsService {
  private readonly  roomsUrl: string;
  private readonly  addRoomUrl: string;
  private readonly  removeRoomUrl: string;
  private readonly  removeRoomUrl2: string;



  constructor(private http: HttpClient) {
    this.roomsUrl = 'http://localhost:8080/admin/getRooms';
    this.addRoomUrl = 'http://localhost:8080/admin/addRoom';
    this.removeRoomUrl = 'http://localhost:8080/admin/deleteRoom';
    this.removeRoomUrl2 = 'http://localhost:8080/admin/deleteRoom2';



  }
  public getRooms(): Observable<Set<Room>> {
    return this.http.get<Set<Room>>(this.roomsUrl);
  }

  public addRoom(room: Room): Observable<any> {
    return this.http.post<any>(this.addRoomUrl, room);
  }

  public removeRoom(name: string, content: string): Observable<any> {
    return this.http.post<any>( this.removeRoomUrl, {name, content});
  }

  public removeRoom2(id: number, content: string): Observable<any> {
    return this.http.post<any>( this.removeRoomUrl2, {id, content});
  }



}
