import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChangePassService {
  private readonly updatePassCCAUrl: string;
  private readonly justUpdatePassUrl: string;
  constructor(private http: HttpClient) {
    this.updatePassCCAUrl = 'http://localhost:8080/cadmin/updatePassword';
    this.justUpdatePassUrl = 'http://localhost:8080/cadmin/justUpdatePassword';
  }
  updatePassword(email: string, newpassword: string): Observable<any> {
    return this.http.post<any>( this.updatePassCCAUrl, {email, newpassword});
  }

  justUpdatePassword(email: string, newpassword: string) {
    return this.http.post<any>( this.justUpdatePassUrl, {email, newpassword});
  }
}
