import {Injectable} from '@angular/core';
import {Diagnose} from '../../models/diagnose.model';
import {HttpClient} from '@angular/common/http';
import {Drug} from '../../models/drug.model';

@Injectable()
export class CreatingDiagnoseService {
  private readonly createDiagnoseUrl: string;
  constructor(private http: HttpClient) {
    this.createDiagnoseUrl = 'http://localhost:8080/createDiagnose';
  }

  createDiagnose(diagnose: Diagnose) {
    return this.http.post<Drug>(this.createDiagnoseUrl, diagnose);
  }
}
