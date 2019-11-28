import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CcadminCreateDrugCodeService {
  private readonly drugUrl: string;

  constructor(private http: HttpClient) {
    this.drugUrl = 'http://localhost:8080/users';
  }
}
