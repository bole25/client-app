import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AppointmentType} from '../../models/appointmentType.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user.model';
import {Clinic} from '../../models/clinic.model';
import {ScheduleAppService} from './scheduleApp.service';
import {Doctor} from '../../models/doctor.model';
import {Appointment} from '../../models/appointment.model';
import {AppTypePriceDiscModel} from '../../models/appTypePriceDisc.model';
import {DoctorFreeTimes} from '../../models/dto/doctorFreeTimes.model';
import {CcadminService} from '../../ccadmin/registerClinicAdmin/ccadmin.service';


@Component({
  selector: 'app-clinic',
  templateUrl: './scheduleApp.component.html'
})

export class ScheduleAppComponent implements OnInit {
  appTypes: Set<AppointmentType>;
  appType: AppointmentType;
  selectedType: string;
  selectedDate: string;
  emailContentPatient: string;
  emailContentDoctor: string;

  clinics: Set<Clinic>;
  clinic: Clinic;
  filterDoctorsByField: Set<DoctorFreeTimes>;
  filteredDoctors: Set<DoctorFreeTimes>;
  filteredClinics: Set<Clinic>;
  filteredClinicsByField: Set<Clinic>;
  // appointmentTypePriceDisc: AppTypePriceDiscModel;
  appointmentTypePriceDiscounts: Set<AppTypePriceDiscModel>;
  selectedATPD: AppTypePriceDiscModel;



  filteredString: string;
  filteredString2: string;
  requests: string;

  showClinics: boolean;
  showDoctors: boolean;

  showClinicFilter: boolean;
  showDoctorFilter: boolean;



  takeTimeFromDropDown: string;
  appointments: Set<Appointment>;
  schedule: FormGroup;

  // pretraga za kliniku

  // tslint:disable-next-line:max-line-length
  constructor(protected router: Router, protected route: ActivatedRoute, protected service: ScheduleAppService, private formBuilder: FormBuilder) {
    this.appTypes = new Set<AppointmentType>();
    this.appType = new AppointmentType();
    this.appointments = new Set<Appointment>();
    this.clinics = new Set<Clinic>();
    this.clinic = new Clinic();
    this.filteredClinics = new Set<Clinic>();
    this.filteredClinicsByField = new Set<Clinic>();
    this.filterDoctorsByField = new Set<DoctorFreeTimes>();
    this.filteredDoctors = new Set<DoctorFreeTimes>();
    this.appointmentTypePriceDiscounts = new Set<AppTypePriceDiscModel>();
    this.selectedATPD = new AppTypePriceDiscModel();
  }

  ngOnInit(): void {

        this.service.getAppTypes().subscribe(data1 => {
        this.appTypes = data1;
        });
  }

  // TODO: provjeriti dal je izabran datum i tip
  filterChange(): void {
    this.showClinics = true;
    this.showDoctors = false;
    this.showClinicFilter = true;
    this.showDoctors = false;
    this.filteredClinics = new Set<Clinic>();
    let filteredType: AppointmentType;
    for (const t of this.appTypes) {
      if (t.type.includes(this.selectedType)) {
        filteredType = t;
        this.appType = t;
      }
  }
    if (filteredType === undefined) {
      alert('Appointment type must be selected');
      return;
    }
    if (this.selectedDate === undefined) {
      alert('date must be selected');
      return;
    }
    this.service.getFilteredClinics(filteredType, this.selectedDate).subscribe(result => {
      this.filteredClinics = result;
      const selectedAppType = this.appType;
      this.filteredClinics.forEach(function f1(clinic) {
        clinic.appointmentTypePriceDiscounts.forEach(function f2(atpd) {
          if (atpd.appointmentType.id === selectedAppType.id) {
            clinic.selectedATPD = atpd;
          }
        });
      });
      this.filteredClinicsByField = this.filteredClinics;
  });
  }
  // za dobavljanje doktora koji imaju slobodan termin
  onSubmit(event) {
    this.showClinics = true;
    this.showDoctors = true;
    this.showClinicFilter = true;
    this.showDoctorFilter = true;
    this.filteredDoctors = new Set<DoctorFreeTimes>();
    const elementId: string = (event.target as Element).id;
    this.service.getDoctors(this.appType, this.selectedDate, elementId).subscribe(data1 => {
      this.filteredDoctors = data1;
      // this.router.navigate(['/availableDocs']);
    });


  }


  filterClinic() {
    this.showDoctors = false;
    this.showClinics = true;
    this.showDoctorFilter = false;
    this.showClinicFilter = true;
    this.filteredClinicsByField = new Set<Clinic>();
    alert('tuuu je');
    for (const clc of this.filteredClinics) {
        if (clc.clinicName.toLowerCase().includes(this.filteredString.toLowerCase())) {
          this.filteredClinicsByField.add(clc);
          alert('hoce li mooozda');
        }
      }
  }

  filterDoctors() {
    this.showDoctors = true;
    this.showClinics = false;
    this.filterDoctorsByField = new Set<DoctorFreeTimes>();
    alert('unisao');
    for (const doc of this.filteredDoctors) {
      if (doc.doctor.firstName.toLowerCase().includes(this.filteredString2.toLowerCase())) {
        this.filterDoctorsByField.add(doc);
      }
    }

  }

  clickSchedule(event) {
    // tslint:disable-next-line:no-debugger
    debugger;
    const user = JSON.parse(localStorage.user);
    this.service.requestApp(this.appType, this.selectedDate + ' ' + this.takeTimeFromDropDown + ':00',
      event.target.id, JSON.parse(localStorage.user).email).subscribe(response => {
        alert('usao');
    });
  }
  private createForm() {
    this.schedule = this.formBuilder.group({

      timeSchedule: ['', [Validators.required]]
    });
  }

  get f() { return this.schedule.controls; }
}
