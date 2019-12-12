import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {Clinic} from '../models/clinic.model';

@Injectable()
export class CcadminService {
  private readonly clinicAdminUrl: string;
  private readonly clinicsUrl: string;

  constructor(private http: HttpClient) {
    this.clinicAdminUrl = 'http://localhost:8080/regClinicAdmin';
    this.clinicsUrl = 'http://localhost:8080/getclinics';
  }

  /*public getUser(email: string, password: string): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + email + '/' + password);
  }*/

  public getClinics(): Observable<Set<Clinic>> {
    return this.http.get<Set<Clinic>>(this.clinicsUrl);
  }

  public save(user: User, clinic: string) {
    return this.http.post<User>(this.clinicAdminUrl + '/' + clinic, user);
  }

}

