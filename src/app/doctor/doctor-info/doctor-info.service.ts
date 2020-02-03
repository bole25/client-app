import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DoctorInfoService {
  private readonly updatePersonalInfoUrl: string;

  constructor(private http: HttpClient) {
    this.updatePersonalInfoUrl = 'http://localhost:8080/doctor/updatePersonalInfo';
  }


   updatePersonalInfo(email: string, newfirstName: string) {
    return this.http.post<any>( this.updatePersonalInfoUrl, {email, newfirstName});
  }



}
