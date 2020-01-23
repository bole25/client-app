import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Injectable} from '@angular/core';



@Injectable()
export class NewCCAService {
  private readonly userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users/newcca';
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }
}
