import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ClinicProfileService {

  private readonly updateClinicInfoUrl: string;
  constructor(private http: HttpClient) {
    this.updateClinicInfoUrl = 'http://localhost:8080/admin/....';
  }

}
