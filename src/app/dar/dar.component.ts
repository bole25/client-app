import {Component, OnInit} from '@angular/core';
import {AppointmentSurgeryDto} from '../models/dto/appointmentSurgeryDto';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ActivatedRoute, Router} from '@angular/router';
import {UpcomingEventsService} from '../patient/upcoming-events/upcoming-events.service';
import {DarService} from './dar.service';
import {Drug} from '../models/drug.model';
import {toString} from '@ng-bootstrap/ng-bootstrap/util/util';
import {Diagnose} from "../models/diagnose.model";

@Component({
  selector: 'app-dar',
  templateUrl: './dar.component.html',
  styleUrls: ['./dar.component.css']
})
export class DarComponent implements OnInit {

  appointmentsSurgeries: Array<AppointmentSurgeryDto>;
  drugs: Set<Drug>;
  diagnoses: Set<Diagnose>;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  loading = true;
  show = false;
  idDrug: string;
  idApp: string;
  idDiagnose: string;
  tipzakazivanja: string;
  startDate: Date;
  mindate: Date;
  time: {hour: 13, minute: 30};
  constructor(private router: Router, private route: ActivatedRoute, private service: DarService) {
    this.appointmentsSurgeries = new Array<AppointmentSurgeryDto>();
    this.drugs = new Set<Drug>();
    this.diagnoses = new Set<Diagnose>();
    this.mindate = new Date();
  }

  ngOnInit() {
    this.service.getFuture().subscribe(data => {
      this.appointmentsSurgeries = Array.from(data);
      this.loading = false;
    });
    this.service.getDrugs().subscribe(data => { this.drugs = data; });
    this.service.getDiagnoses().subscribe(data => { this.diagnoses = data; });
  }

  addToRecipe() {
    this.service.addToRecipe(this.idApp, this.idDrug).subscribe(result => { alert('Recipe added'); });
  }

  selectAppointment(id: string) {
    this.idApp = id;
    this.show = true;
  }

  back() {
    this.idApp = null;
    this.show = false;
  }

  selectOption(id: string) {
    this.idDrug = id;
  }

  selectDiagnose(idDiag: string) {
      this.idDiagnose = idDiag;
  }

  addDiagnose() {
    this.service.addDiagnose(this.idApp, this.idDiagnose).subscribe(result => { alert('Diagnose added'); });
  }

  selectRequest(tip: string) {
    this.tipzakazivanja = tip;
    alert(this.tipzakazivanja);
  }
}
