import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Clinic} from '../../models/clinic.model';

@Component({
  selector: 'app-cadmin',
  templateUrl: './clinicProfile.component.html'
})

export class ClinicProfileComponent implements OnInit {


  newName: string;
  clinic: Clinic;
  clinics: Set<Clinic>;
  ngOnInit(): void {
  }

  constructor(private router: Router, private route: ActivatedRoute) {

    this.clinic = new Clinic();
    this.clinics = new Set<Clinic>();


}

}


