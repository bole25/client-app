import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import {CcadminService} from '../registerClinicAdmin/ccadmin.service';


@Component({
  selector: 'app-users',
  templateUrl: './ccadminInfo.component.html'
})

export class CcadminInfoComponent {
  email: string;
  password: string;
  user: User;
  city: string;
  address: string;
  country: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminService) {
    this.user = new User();
  }
}
