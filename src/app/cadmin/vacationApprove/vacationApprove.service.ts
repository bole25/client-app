import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vacationrequest} from '../../models/vacationrequest.model';

@Injectable()
export class VacationApproveService {
  private readonly requestsUrl: string;
  private readonly deleterequestUrl: string;
  private readonly acceptUrl: string;
  constructor(private http: HttpClient) {
    this.requestsUrl = 'http://localhost:8080/admin/getVacationRequests/';
    this.deleterequestUrl = 'http://localhost:8080/admin/deleterequest';
    this.acceptUrl = 'http://localhost:8080/admin/acceptrequest';
  }

  public getRequests(email: string): Observable<Set<Vacationrequest>> {
    return this.http.get<Set<Vacationrequest>>(this.requestsUrl + '/' + email + '/');
  }

  /*public removeRequest(email: string, content: string): Observable<any> {
    return this.http.post<any>( this.deleterequestUrl, {email, content});
  }

  public acceptRequest(email: string): Observable<any> {
    return this.http.post<any>(this.acceptUrl, email);
  }*/

}
