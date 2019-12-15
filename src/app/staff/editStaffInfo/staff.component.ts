import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../../models/user.model';
import {StaffService} from './staff.service';

@Component({
  selector: 'app-users',
  templateUrl: './staff.component.html'
})

export class StaffComponent implements OnInit {

  users: Set<User>;
  user: User;

  constructor(private router: Router, private route: ActivatedRoute, private service: StaffService) {
    this.user = new User();
    this.users = new Set<User>();
  }

  ngOnInit(): void {
    this.service.getStaff().subscribe(data1 => {this.users = data1; });

  }


}
