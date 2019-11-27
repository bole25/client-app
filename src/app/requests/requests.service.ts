import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class RequestsService {
  private readonly requestsUrl: string;

  constructor(private http: HttpClient) {
    this.requestsUrl = 'http://localhost:8080/getrequests';
  }

  public getRequests(): Observable<Set<User>> {
    return this.http.get<Set<User>>(this.requestsUrl);
  }

}
