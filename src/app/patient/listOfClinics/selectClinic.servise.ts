import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Clinic} from '../../models/clinic.model';
import {Doctor} from '../../models/doctor.model';
import {AppointmentSurgeryDto} from '../../models/dto/appointmentSurgeryDto';

@Injectable()
export class SelectClinicServise {
  private readonly getClinicsUrl: string;
  private readonly getClinicDoctorsUrl: string;
  private readonly getPredefinedUrl: string;
  private readonly bookFastAppointmentUrl: string;

  constructor(private http: HttpClient) {
    this.getClinicsUrl = 'http://localhost:8080/patient/getAllClinics';
    this.getClinicDoctorsUrl = 'http://localhost:8080/patient/getDoctors';
    this.getPredefinedUrl = 'http://localhost:8080/patient/getPredefinedAppointments';
    this.bookFastAppointmentUrl = 'http://localhost:8080/patient/getPredefinedAppointments';
  }

  getClinics() {
    return this.http.get<Set<Clinic>>(this.getClinicsUrl);
  }

  getDoctors(id: string) {
    return this.http.get<Set<Doctor>>(this.getClinicDoctorsUrl + '/' + id);
  }

  getPredefinedAppointments(id: string) {
    return this.http.get<Set<AppointmentSurgeryDto>>(this.getPredefinedUrl + '/' + id);
  }

  bookFastAppointment(id: string) {
    return this.http.post(this.bookFastAppointmentUrl + '/' + id, {});
  }
}
