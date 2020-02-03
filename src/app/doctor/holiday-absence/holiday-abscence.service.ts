import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vacationrequest} from '../../models/vacationrequest.model';

@Injectable()
export class HolidayAbscenceService {

  private readonly reqUrl: string;
  private readonly getReqUrl: string;


  constructor(private http: HttpClient) {
    this.reqUrl = 'http://localhost:8080/doctor/holidayReq';
    this.getReqUrl = 'http://localhost:8080/cadmin/getHolidayRequests';
  }

  public save(vacreq: Vacationrequest) {
    return this.http.post<Vacationrequest>(this.reqUrl, vacreq);
  }

   public getReqs(): Observable<Set<Vacationrequest>> {
    return this.http.get<Set<Vacationrequest>>(this.getReqUrl);
  }




}
