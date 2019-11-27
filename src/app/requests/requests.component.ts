import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../login/login.service';
import {RequestsService} from './requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})

export class RequestsComponent implements OnInit {
  requests: Set<User>;

  constructor(private router: Router, private route: ActivatedRoute, private service: RequestsService) {
    this.requests = new Set<User>();

  }

  ngOnInit(): void {
    this.service.getRequests().subscribe(data => {this.requests = data;
    });
  }

}

