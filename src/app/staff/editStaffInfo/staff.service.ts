import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class StaffService {
  private readonly staffUrl: string;

  constructor(private http: HttpClient) {
    this.staffUrl = 'http://localhost:8080/getStaff';
  }

  public getStaff(): Observable<Set<User>> {
    return this.http.get<Set<User>>('http://localhost:8080/getStaff');
  }
}
