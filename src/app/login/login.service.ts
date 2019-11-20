import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {
  private readonly userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users';
  }

  public getUser(email: string, password: string): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + email + '/' + password);
  }

}
