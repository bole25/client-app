import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Clinic} from '../../models/clinic.model';
import {CcadminregisterclinicService} from './ccadminregisterclinic.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './ccadminregisterclinic.component.html',

})

export class CcadminRegisterClinicComponent implements OnInit {

  address: string;
  clinic: Clinic;
  clinics: Set<Clinic>;
  filteredClinics: Set<Clinic>;
  filteredString: string;



  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminregisterclinicService) {
    this.clinic = new Clinic();
    this.clinics = new Set<Clinic>();
    this.filteredClinics = new Set<Clinic>();
  }

  ngOnInit() {

    this.service.getRequests().subscribe(data => {
      this.clinics = data;
      this.filteredClinics = data;
    });

  }


  onSubmit(): void {
    this.service.save(this.clinic).subscribe(result => {
      this.router.navigate(['/clinics']);
      location.reload();
    });

  }

  filterChange() {
    this.filteredClinics = new Set<Clinic>();
    for (const clc of this.clinics) {
      if (clc.clinicName.toLowerCase().includes(this.filteredString.toLowerCase())) {
        this.filteredClinics.add(clc);
      }
    }
  }
}
