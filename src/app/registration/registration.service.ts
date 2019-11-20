import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class RegistrationService {
  private readonly userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users';
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

}
