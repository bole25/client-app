import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AcceptService {
  private readonly confirmUrl: string;

  constructor(private http: HttpClient) {
    this.confirmUrl = 'http://localhost:8080/confirm';
  }
  public confirmAcc(email: string): Observable<any> {
    return this.http.put<any>(this.confirmUrl + '/' + email, {});
  }
}
