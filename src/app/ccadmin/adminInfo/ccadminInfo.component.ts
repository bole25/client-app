import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import {CcadminService} from '../registerClinicAdmin/ccadmin.service';


@Component({
  selector: 'app-users',
  templateUrl: './ccadminInfo.component.html'
})

export class CcadminInfoComponent implements OnInit {
  user: User;
  user1: User;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.user = new User();
    this.user1 = new User();
    this.user1 = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
    this.user1 = JSON.parse(localStorage.getItem('user'));
  }
}
