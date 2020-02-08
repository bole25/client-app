import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Clinic} from '../../models/clinic.model';

@Injectable()
export class SelectClinicServise {
  private readonly getClinicsUrl: string;

  constructor(private http: HttpClient) {
    this.getClinicsUrl = 'http://localhost:8080/patient/getAllClinics';
  }

  getClinics() {
    return this.http.get<Set<Clinic>>(this.getClinicsUrl);
  }

}
