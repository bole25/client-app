import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class IzmjeniSifruService {
  private readonly updatePassCCAUrl: string;
  private readonly justUpdatePassUrl: string;
  constructor(private http: HttpClient) {
    this.updatePassCCAUrl = 'http://localhost:8080/cca/updatePassword';
    this.justUpdatePassUrl = 'http://localhost:8080/cca/justUpdatePassword';
  }
  updatePassword(email: string, newpassword: string): Observable<any> {
    return this.http.post<any>( this.updatePassCCAUrl, {email, newpassword});
  }

  justUpdatePassword(email: string, newpassword: string) {
    return this.http.post<any>( this.justUpdatePassUrl, {email, newpassword});
  }
}
