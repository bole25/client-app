import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Clinic} from '../models/clinic.model';
import {CcadminregisterclinicService} from './ccadminregisterclinic.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './ccadminregisterclinic.component.html',

})

export class CcadminRegisterClinicComponent implements OnInit {

  clinicName: string;
  address: string;
  clinic: Clinic;
  listofClinics: Clinic[] = [];
  clinics: Set<Clinic>;



  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminregisterclinicService) {
    this.clinic = new Clinic();
    this.clinics = new Set<Clinic>();
  }

  ngOnInit() {

    this.service.getRequests().subscribe(data => {
      this.clinics = data;
    });

  }


  onSubmit(): void {
    this.service.save(this.clinic).subscribe(result => {
      this.router.navigate(['/clinics']);
      location.reload();
    });

  }
}
