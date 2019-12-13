import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Drug} from '../../models/drug.model';
import {Observable} from 'rxjs';

@Injectable()
export class CcadminCreateDrugCodeService {
  private readonly adddrugUrl: string;
  private readonly getdrugsUrl: string;
  constructor(private http: HttpClient) {
    this.adddrugUrl = 'http://localhost:8080/adddrug';
    this.getdrugsUrl = 'http://localhost:8080/getdrugs';
  }

  public addDrug(drug: Drug) {
    return this.http.post<Drug>(this.adddrugUrl, drug);
  }

  public getDrugs(): Observable<Set<Drug>> {
    return this.http.get<Set<Drug>>(this.getdrugsUrl);
  }
}
