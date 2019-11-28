import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Drug} from '../models/drug.model';
import {CcadminCreateDrugCodeService} from './ccadminCreateDrugCode.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-users',
  templateUrl: './ccadminCreateDrugCode.component.html'
})
// napomena: recipe record vezati za bazu
export class CcadminCreateDrugCodeComponent {
  id: number;
  drugName: string;
  description: string;
  price: number;

  drug: Drug;

  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminCreateDrugCodeService) {
    this.drug = new Drug();


  }

}
