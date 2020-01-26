import {Component, OnInit} from '@angular/core';
import {Diagnose} from '../../models/diagnose.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CcadminCreateDrugCodeService} from '../drugCode/ccadminCreateDrugCode.service';
import {Drug} from '../../models/drug.model';
import {CreatingDiagnoseService} from './creatingDiagnose.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ccaDiagnose',
  templateUrl: './creatingDiagnose.component.html'
})
export class CreatingDiagnoseComponent implements OnInit {
  diagnose: Diagnose;
  ngOnInit(): void {
  }
  constructor(private router: Router, private route: ActivatedRoute, private service: CreatingDiagnoseService) {
    this.diagnose = new Diagnose();
  }

  onSubmit() {
    this.service.createDiagnose(this.diagnose).subscribe(result => {
      this.router.navigate(['/ccaDiagnose']);
      alert('Successfully created diagnose');
      this.diagnose = new Diagnose();
    }, error => {alert('Diagnose already exist'); });
  }

  get isEmpty() {
    if (this.diagnose.name == null || this.diagnose.name === '' || this.diagnose.description === '' || this.diagnose.description == null ) {
      return true;
    } else {
      return false;
    }
  }
}
