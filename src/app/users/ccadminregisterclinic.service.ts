import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Clinic} from '../models/clinic.model';
import {Observable} from 'rxjs';

@Injectable()
export class CcadminregisterclinicService {
  private readonly  clinicUrl: string;
  private readonly  addClinicUrl: string;
  // private clinicName = sessionStorage.getItem('clinicName');

  constructor(private http: HttpClient) {
    this.clinicUrl = 'http://localhost:8080/getclinics';
    this.addClinicUrl = 'http://localhost:8080/clinics';
  }


  public getRequests(): Observable<Set<Clinic>> {
    return this.http.get<Set<Clinic>>(this.clinicUrl);
  }

  public save(clinic: Clinic): Observable<any> {
    return this.http.post<any>(this.addClinicUrl, clinic);
  }




  // Http Headers

  // private httpOptionsWithDataTypes = {
  //   headers: new HttpHeaders({
  //     Authorization: 'Basic ' + btoa(this.clinicName),
  //   }), dataType: 'text/plain; charset=utf-8', responseType: 'text' as 'json'
  // };
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     Authorization: 'Basic ' + btoa(this.clinicName),
  //   })
  // };
  //

  //

  //
  //
  //
  // getAllClinics(): Observable<Clinic[]> {
  //
  //   return this.http.get<Clinic[]>(this.getUrlAddClinics, this.httpOptions);
  //
  //
  // }



}
