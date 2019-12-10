import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {Clinic} from '../models/clinic.model';

@Injectable()
export class CcadminService {
  private readonly userUrl: string;
  private readonly clinicsUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users';
    this.clinicsUrl = 'http://localhost:8080/getclinics';
  }

  /*public getUser(email: string, password: string): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + email + '/' + password);
  }*/

  public getClinics(): Observable<Set<Clinic>> {
    return this.http.get<Set<Clinic>>(this.clinicsUrl);
  }

}

