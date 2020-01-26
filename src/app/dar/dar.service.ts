import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {Drug} from '../models/drug.model';

@Injectable()
export class DarService {
  private readonly patientsUrl: string;
  private readonly userUrl: string;
  private readonly drugsUrl: string;
  private params: HttpParams;
  private readonly makeRecipeUrl: string;
  private paramsforrecipe: HttpParams;

  constructor(private http: HttpClient) {
    this.patientsUrl = 'http://localhost:8080/doctor/getpatients';
    this.userUrl = 'http://localhost:8080/doctor/getuser';
    this.drugsUrl = 'http://localhost:8080/drugs/getalldrugs';
    this.makeRecipeUrl = 'http://localhost:8080/doctor/makerecipe';
  }

  public getPatients(): Observable<Set<User>> {
    return this.http.get<Set<User>>(this.patientsUrl);
  }

  getUser(email: string) {
    this.params = new HttpParams();
    this.params.set('email', email)
    return this.http.get<any>(this.userUrl, {params: this.params});
  }

  getDrugs() {
    return this.http.get<Set<Drug>>(this.drugsUrl);
  }

  makeRecipe(recipe: Drug, email: string): Observable<any> {
    return this.http.post<any>(this.makeRecipeUrl + '/' + email, recipe, );
  }
}
