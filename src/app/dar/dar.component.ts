import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestsService} from '../requests/requests.service';
import {DarService} from './dar.service';
import {Drug} from '../models/drug.model';

@Component({
  selector: 'app-dar',
  templateUrl: './dar.component.html',
  styleUrls: ['./dar.component.css']
})

export class DarComponent implements OnInit {
  patients: Set<User>;
  drugs: Set<Drug>;
  drugToRecipe: Drug;
  user: User;
  showpatients: boolean;
  mail: string;
  recipefor: string;
  takeDrugFromDropDown: string;
  message: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: DarService) {
    this.patients = new Set<User>();
    this.user = new User();
    this.drugs = new Set<Drug>();
  }
  ngOnInit(): void {
    this.showpatients = true;
    this.service.getDrugs().subscribe(data => {this.drugs = data; });
    this.service.getPatients().subscribe(data => {this.patients = data;
    });
  }

  addRecipe(email: string, name: string) {
    this.mail = email;
    this.recipefor = name;
    this.message = 'Successfully created recipe for ' + this.recipefor;
    this.showpatients = false;
  }

  onSubmit() {
    if (this.takeDrugFromDropDown != null) {
      this.drugToRecipe = this.finddrug(this.takeDrugFromDropDown);
    }
  }

  finddrug(name: string) {
     for (const drug of this.drugs) {
       if (name === drug.drugName) {
         return drug;
       }
     }
  }

  confirmRecipes(message?: string) {
    this.service.makeRecipe(this.drugToRecipe, this.mail).subscribe(result => {
      this.router.navigate(['/dar']);  alert(message); });
  }

  removeDrugFromRecipe(drugName: string) {
    this.drugToRecipe = new Drug();
  }
}
