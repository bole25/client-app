import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';
import {Clinic} from '../../models/clinic.model';

@Injectable()
export class RegisterDoctorService {
  private readonly clinicDoctorUrl: string;
  private readonly clinicsUrl: string;
  private readonly deleteDocUrl: string;

  constructor(private http: HttpClient) {
    this.clinicDoctorUrl = 'http://localhost:8080/admin/regClinicDoctor';
    this.clinicsUrl = 'http://localhost:8080/getclinicsByCA';
    this.deleteDocUrl = 'http://localhost:8080/admin/deleteDoctor';

  }

  /*public getUser(email: string, password: string): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + email + '/' + password);
  }*/

  public getClinics(): Observable<Set<Clinic>> {
    return this.http.get<Set<Clinic>>(this.clinicsUrl);
  }

  public save(user: User, clinic: string): Observable<any> {
    return this.http.post<any>(this.clinicDoctorUrl + '/' + clinic, user);
  }
  public getDoctors(): Observable<Set<User>> {
    return this.http.get<Set<User>>('http://localhost:8080/admin/getDoctors');
  }

  public removeDoctor(email: string, content: string): Observable<any> {
    return this.http.post<any>( this.deleteDocUrl, {email, content});
  }

}

