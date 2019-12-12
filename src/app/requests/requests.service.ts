import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class RequestsService {
  private readonly requestsUrl: string;
  private readonly deleterequestUrl: string;
  private readonly acceptUrl: string;
  constructor(private http: HttpClient) {
    this.requestsUrl = 'http://localhost:8080/admin/getrequests';
    this.deleterequestUrl = 'http://localhost:8080/admin/deleterequest';
    this.acceptUrl = 'http://localhost:8080/acceptrequest';
  }

  public getRequests(): Observable<Set<User>> {
    return this.http.get<Set<User>>(this.requestsUrl);
  }

  public removeRequest(email: string, content: string): Observable<any> {
    return this.http.delete( this.deleterequestUrl + '/' + email + '/' + content);
  }

  public acceptRequest(email: string): Observable<any> {
    return this.http.put<any>(this.acceptUrl + '/' + email, {});
  }

}
