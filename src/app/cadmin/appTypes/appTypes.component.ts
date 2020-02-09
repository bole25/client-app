import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AppointmentType} from '../../models/appointmentType.model';
import {AppTypesService} from './appTypes.service';

@Component({
  selector: 'app-cadmin',
  templateUrl: './appTypes.component.html',

})

export class AppTypesComponent implements OnInit {
  appType: AppointmentType;
  appTypes: Set<AppointmentType>;
  type: string;
  name: string;
  filteredString: string;
  filteredTypes: Set<AppointmentType>;
  typeContent: string;


  constructor(private router: Router, private route: ActivatedRoute, private service: AppTypesService) {
    this.appType = new AppointmentType();
    this.appTypes = new Set<AppointmentType>();
    this.filteredTypes = new Set<AppointmentType>();

  }

  ngOnInit() {
    this.service.getTypes().subscribe(data => {
      this.appTypes = data;
      this.filteredTypes = data;
    });

  }

  filterChange() {
    this.filteredTypes = new Set<AppointmentType>();
    for (const t of this.appTypes) {
      if (t.type.toLowerCase().includes(this.filteredString.toLowerCase())) {
        this.filteredTypes.add(t);
      }
    }

  }

  onSubmit() {
    this.service.addType(this.appType).subscribe(result => {
      alert('Success!');
      location.reload();

    });

  }

  delete_Type(type: string) {
    this.service.removeType(type, this.typeContent).subscribe(result => this.router.navigate(['deleteType']));

  }

}
