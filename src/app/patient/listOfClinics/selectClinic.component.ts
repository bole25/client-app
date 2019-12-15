import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Clinic} from '../../models/clinic.model';
import {CcadminregisterclinicService} from '../../ccadmin/registerClinic/ccadminregisterclinic.service';

@Component({
  selector: 'app-users',
  templateUrl: './selectClinic.component.html'
})

export class SelectClinicComponent implements OnInit {

  clinics: Set<Clinic>;
  clinicName: string;
  address: string;
  clinic: Clinic;
  selectedclinic: string;


  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminregisterclinicService) {
    this.clinic = new Clinic();
    this.clinics = new Set<Clinic>();
  }

  ngOnInit(): void {
    this.service.getRequests().subscribe(data => {
      this.clinics = data;
    });

  }
}

