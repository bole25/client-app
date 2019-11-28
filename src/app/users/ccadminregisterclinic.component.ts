import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Clinic} from '../models/clinic.model';
import {CcadminregisterclinicService} from './ccadminregisterclinic.service';

@Component({
  selector: 'app-users',
  templateUrl: './ccadminregisterclinic.component.html',

})

export class CcadminRegisterClinicComponent {
  clinicName: string;
  address: string;
  clinic: Clinic;


  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminregisterclinicService) {
    this.clinic = new Clinic();
  }
}
