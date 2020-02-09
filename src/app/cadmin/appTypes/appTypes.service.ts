import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppointmentType} from '../../models/appointmentType.model';

@Injectable()
export class AppTypesService {
  private readonly  typesUrl: string;
  private readonly  addTypeUrl: string;
  private readonly  removeTypeUrl: string;



  constructor(private http: HttpClient) {
    this.typesUrl = 'http://localhost:8080/admin/getTypes';
    this.addTypeUrl = 'http://localhost:8080/admin/addTypes';
    this.removeTypeUrl = 'http://localhost:8080/admin/deleteTypes';



  }
  public getTypes(): Observable<Set<AppointmentType>> {
    return this.http.get<Set<AppointmentType>>(this.typesUrl);
  }

  public addType(type: AppointmentType): Observable<any> {
    return this.http.post<any>(this.addTypeUrl, type);
  }

  public removeType(type: string, content: string): Observable<any> {
    return this.http.post<any>( this.removeTypeUrl, {type, content});
  }


}
