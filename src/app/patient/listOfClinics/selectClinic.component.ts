import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Clinic} from '../../models/clinic.model';
import {ProgressSpinnerMode, ThemePalette} from '@angular/material';
import {SelectClinicServise} from './selectClinic.servise';

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
  loading = true;
  profile = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';


  constructor(private router: Router, private route: ActivatedRoute, private service: SelectClinicServise) {
    this.clinics = new Set<Clinic>();
    this.filteredClinics = new Set<Clinic>();
    this.filteredClinicsByField = new Set<Clinic>();
  }

  ngOnInit(): void {
    this.service.getClinics().subscribe(data => {
      this.clinics = data;
      this.filteredClinics = data;
      this.filteredClinicsByField = data;
      this.loading = false;
    });
  }

  fullProfile(event) {
    const elementId: string = (event.target as Element).id;
    alert(elementId);
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
}

