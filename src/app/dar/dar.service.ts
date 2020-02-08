import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppointmentSurgeryDto} from '../models/dto/appointmentSurgeryDto';
import {Drug} from '../models/drug.model';
import {Observable} from 'rxjs';
import {Diagnose} from "../models/diagnose.model";

@Injectable()
export class DarService {
  private readonly getFutureUrl: string;
  private readonly getDrugsUrl: string;
  private readonly createRecipeUrl: string;
  private readonly addDgsUrl: string;
  private readonly getDiagnosesUrl: string;
  constructor(private http: HttpClient) {
    this.getFutureUrl = 'http://localhost:8080/doctor/getFutureAppointmentsAndSurgeries';
    this.getDrugsUrl = 'http://localhost:8080/drugs/getalldrugs';
    this.createRecipeUrl = 'http://localhost:8080/drugs/drugToPatient';
    this.addDgsUrl = 'http://localhost:8080/diagnoseToPatient';
    this.getDiagnosesUrl = 'http://localhost:8080/getDiagnoses';
  }

  getFuture() {
    return this.http.get<Set<AppointmentSurgeryDto>>(this.getFutureUrl);
  }

  getDrugs() {
    return this.http.get<Set<Drug>>(this.getDrugsUrl);
  }

  addToRecipe(appId: string, drugId: string): Observable<any> {
      return this.http.post(this.createRecipeUrl + '/' + appId + '/' + drugId + '/', {});
  }

  addDiagnose(appId: string, diagnoseId: string) {
    return this.http.post(this.addDgsUrl + '/' + appId + '/' + diagnoseId + '/', {});
  }

  getDiagnoses() {
    return this.http.get<Set<Diagnose>>(this.getDiagnosesUrl);
  }
}
