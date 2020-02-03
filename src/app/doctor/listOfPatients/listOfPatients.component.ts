import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../../models/user.model';
import {ListOfPatientsService} from './listOfPatients.service';
import {Clinic} from '../../models/clinic.model';

@Component({
  selector: 'app-users',
  templateUrl: './listOfPatients.component.html'
})

export class ListOfPatientsComponent implements OnInit {

  user: User;
  users: Set<User>;
  sortBy: string;
  filteredPatients: Set<User>;
  filteredString: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: ListOfPatientsService) {
    this.user = new User();
    this.users = new Set<User>();
    this.filteredPatients = new Set<User>();

  }

  ngOnInit(): void {
    this.service.getPatients().subscribe(data1 => {
      this.users = data1;
      this.filteredPatients = data1;
    });
  }

  filterChange() {
    this.filteredPatients = new Set<User>();
    for (const u of this.users) {
      if (u.firstName.includes(this.filteredString)) {
        this.filteredPatients.add(u);
      }
    }
  }

  onSubmit(): void {
    this.router.navigate(['/historyPatient']);
    // location.reload();
  }
}
