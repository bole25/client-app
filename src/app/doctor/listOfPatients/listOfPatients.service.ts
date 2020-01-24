import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class ListOfPatientsService {
  private readonly patientsUrl: string;

  constructor(private http: HttpClient) {
    this.patientsUrl = 'http://localhost:8080/getPatients';
  }

  public getPatients(): Observable<Set<User>> {
    return this.http.get<Set<User>>('http://localhost:8080/getPatients');
  }
}
