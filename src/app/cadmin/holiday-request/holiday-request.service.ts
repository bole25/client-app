import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {Vacationrequest} from '../../models/vacationrequest.model';

@Injectable()
export class HolidayRequestService {
  private readonly requestsUrl: string;
  private readonly deleterequestUrl: string;
  private readonly acceptUrl: string;
  private readonly getReqUrl: string;
  constructor(private http: HttpClient) {
    this.requestsUrl = 'http://localhost:8080/cadmin/getHolidayRequests';
    this.deleterequestUrl = 'http://localhost:8080/cadmin/deleteHolidayRequest';
    this.acceptUrl = 'http://localhost:8080/cadmin/acceptHolidayRequest';
    this.getReqUrl = 'http://localhost:8080/cadmin/getHolidayRequests';

  }

  public getRequests(): Observable<Set<User>> {
    return this.http.get<Set<User>>(this.requestsUrl);
  }

  public removeRequest(email: string, content: string): Observable<any> {
    return this.http.post<any>( this.deleterequestUrl, {email, content});
  }

  public acceptRequest(email: string): Observable<any> {
    return this.http.post<any>(this.acceptUrl, email);
  }

  public getReqs(): Observable<Set<Vacationrequest>> {
    return this.http.get<Set<Vacationrequest>>(this.getReqUrl);
  }



}

