import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class StaffService {
  private readonly staffUrl: string;
  private readonly changeUrl: string;


  constructor(private http: HttpClient) {
    this.staffUrl = 'http://localhost:8080/getStaff';
    this.changeUrl = 'http://localhost:8080/changeName';

  }

  public getStaff(): Observable<Set<User>> {
    return this.http.get<Set<User>>('http://localhost:8080/getStaff');
  }

  public changeName(user: User, firstName: string): Observable<Set<User>> {
    return this.http.post<Set<User>>(this.changeUrl + '/' + firstName, user);
  }


}
