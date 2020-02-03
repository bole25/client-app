import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vacationrequest} from '../../models/vacationrequest.model';

@Injectable()
export class VacationService {
  private readonly vacationUrl: string;


  constructor(private http: HttpClient) {
    this.vacationUrl = 'http://localhost:8080/requestVacation';
  }

  confirmVacReq(email: string, vacationRequest: Vacationrequest): Observable<any> {
    return this.http.post<any>(this.vacationUrl + '/' + email + '/', {type: vacationRequest.type, startDate: vacationRequest.startDate,
    endDate: vacationRequest.endDate });
  }
}
