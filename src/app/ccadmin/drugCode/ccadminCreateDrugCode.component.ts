import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Drug} from '../.././models/drug.model';
import {CcadminCreateDrugCodeService} from './ccadminCreateDrugCode.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-users',
  templateUrl: './ccadminCreateDrugCode.component.html'
})
// napomena: recipe record vezati za bazu
export class CcadminCreateDrugCodeComponent implements OnInit {
  id: number;
  drugName: string;
  description: string;
  price: number;
  drugs: Set<Drug>;
  drug: Drug;

  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminCreateDrugCodeService) {
    this.drug = new Drug();
    this.drugs = new Set<Drug>();
  }


  onSubmit() {
    this.service.addDrug(this.drug).subscribe(result => {
      this.router.navigate(['/ccadminDrug']);
      location.reload();
    });
  }

  get isEmpty() {
    // tslint:disable-next-line:max-line-length
    if (this.drug.drugName == null || this.drug.drugName === '' || this.drug.description === '' || this.drug.description == null || this.drug.price == null) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    this.service.getDrugs().subscribe(data => {this.drugs = data;
    });
  }
}
