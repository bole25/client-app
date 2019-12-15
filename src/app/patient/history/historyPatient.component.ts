import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Surgery} from '../../models/surgery.model';


@Component({
  selector: 'app-users',
  templateUrl: './historyPatient.component.html'
})

export class HistoryPatientComponent implements OnInit {

  surgeries: Set<Surgery>;
  selectSurgery: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.surgeries = new Set<Surgery>();
  }
  ngOnInit(): void {
  }


}
