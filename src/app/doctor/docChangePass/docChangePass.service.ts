import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DocChangePassService {
  private readonly updatePassUrl: string;
  private readonly justUpdatePassUrl: string;
  constructor(private http: HttpClient) {
    this.updatePassUrl = 'http://localhost:8080/doctor/updatePassword';
    this.justUpdatePassUrl = 'http://localhost:8080/doctor/justUpdatePassword';
  }
  updatePassword(email: string, newpassword: string): Observable<any> {
    return this.http.post<any>( this.updatePassUrl, {email, newpassword});
  }

  justUpdatePassword(email: string, newpassword: string) {
    return this.http.post<any>( this.justUpdatePassUrl, {email, newpassword});
  }
}
