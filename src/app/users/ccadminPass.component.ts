import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import {CcadminService} from '../users/ccadmin.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-users',
  templateUrl: './ccadminPass.component.html'
})

export class CcadminPassComponent {
  email: string;
  user: User;
  repeatedPassword: string;
  password: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: CcadminService) {
    this.user = new User();
  }
}
