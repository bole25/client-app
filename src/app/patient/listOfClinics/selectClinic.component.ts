import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Clinic} from '../../models/clinic.model';
import {ProgressSpinnerMode, ThemePalette} from '@angular/material';
import {SelectClinicServise} from './selectClinic.servise';
import {DoctorFreeTimes} from '../../models/dto/doctorFreeTimes.model';
import {Doctor} from '../../models/doctor.model';
import {AppointmentSurgeryDto} from '../../models/dto/appointmentSurgeryDto';

@Component({
  selector: 'app-users',
  templateUrl: './selectClinic.component.html'
})

export class SelectClinicComponent implements OnInit {

  clinics: Set<Clinic>;
  filteredClinics: Set<Clinic>;
  filteredClinicsByField: Set<Clinic>;
  filteredStringClinic = '';
  filteredStringClinicRating = '';
  filteredStringClinicCountry = '';
  filteredStringClinicCity = '';
  clinic: Clinic;
  loading = true;
  profile = false;
  showDoctors = false;
  showAppointments = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  Doctors: Set<Doctor>;
  filterDoctorsByField: Set<Doctor>;
  Appointments: Set<AppointmentSurgeryDto>;
  filteredAppointments: Set<AppointmentSurgeryDto>;


  constructor(private router: Router, private route: ActivatedRoute, private service: SelectClinicServise) {
    this.clinics = new Set<Clinic>();
    this.filteredClinics = new Set<Clinic>();
    this.filteredClinicsByField = new Set<Clinic>();
    this.clinic = new Clinic();
    this.filterDoctorsByField = new Set<Doctor>();
    this.Doctors = new Set<Doctor>();
    this.Appointments = new Set<AppointmentSurgeryDto>();
    this.filteredAppointments = new Set<AppointmentSurgeryDto>();
  }

  ngOnInit(): void {
    this.service.getClinics().subscribe(data => {
      this.clinics = data;
      this.filteredClinics = data;
      this.filteredClinicsByField = data;
      this.loading = false;
    });
  }

  fullProfile(id: string) {
    this.showDoctors = false
    for (const clc of this.filteredClinics) {
      if (clc.id === id) {
        this.clinic = clc;
        break;
      }
    }
    this.profile = true;

    this.service.getDoctors(id).subscribe(data => {
      this.Doctors = data;
      this.filterDoctorsByField = data;
      this.showDoctors = true;
    });

    this.service.getPredefinedAppointments(id).subscribe(data => {
      this.Appointments = data;
      this.filteredAppointments = data;
      this.showAppointments = true;
    });
  }

  filterClinic() {
    this.filteredClinicsByField = new Set<Clinic>();
    const clinicRating = parseFloat(this.filteredStringClinicRating);
    for (const clc of this.filteredClinics) {
      if (clc.clinicName.toLowerCase().includes(this.filteredStringClinic.toLowerCase()) &&
        (clc.country.toLowerCase().includes(this.filteredStringClinicCountry.toLowerCase())) &&
        (clc.city.toLowerCase().includes(this.filteredStringClinicCity.toLowerCase()))) {
        if (isNaN(clinicRating) || clc.rating >= clinicRating) {
          this.filteredClinicsByField.add(clc);
        }
      }
    }
  }

  bookAppointment(id: string) {
    this.service.bookFastAppointment(id).subscribe(response => {
      alert('Appointment successfully booked');
      this.service.getPredefinedAppointments(id).subscribe(data => {
        this.Appointments = data;
        this.filteredAppointments = data;
        this.showAppointments = true;
      });
    });
  }
}

