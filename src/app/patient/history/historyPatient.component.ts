import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HistoryPatientService} from './historyPatient.service';
import {AppointmentSurgeryDto} from '../../models/dto/appointmentSurgeryDto';
import {ProgressSpinnerMode, ThemePalette} from '@angular/material';
import {RatingDto} from '../../models/dto/ratingDto';


@Component({
  selector: 'app-users',
  templateUrl: './historyPatient.component.html'
})

export class HistoryPatientComponent implements OnInit {

  appointmentsSurgeries: Array<AppointmentSurgeryDto>;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  loading = true;

  constructor(private router: Router, private route: ActivatedRoute, private service: HistoryPatientService) {
    this.appointmentsSurgeries = new Array<AppointmentSurgeryDto>();
  }

  ngOnInit(): void {
    this.service.getHistory().subscribe(data => {
      this.appointmentsSurgeries = Array.from(data);
      this.loading = false;
    });
  }


  rate(doctorId: number, clinicId: number, grade: number) {
    const rating = new RatingDto();
    rating.doctorId = doctorId;
    rating.clinicId = clinicId;
    rating.rating = grade;
    this.service.rate(rating).subscribe(data => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.appointmentsSurgeries.length; i++) {
        if (doctorId != null && doctorId === this.appointmentsSurgeries[i].doctorId) {
          this.appointmentsSurgeries[i].doctorGrade = grade;
        }
        if (clinicId != null && clinicId === this.appointmentsSurgeries[i].clinicId) {
          this.appointmentsSurgeries[i].clinicGrade = grade;
        }
      }
    });
  }
}
