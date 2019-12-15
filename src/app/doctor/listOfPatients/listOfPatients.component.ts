import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './listOfPatients.component.html'
})

export class ListOfPatientsComponent implements OnInit {

  user: User;
  users: Set<User>;
  sortBy: string;

  ngOnInit(): void {
  }
}
