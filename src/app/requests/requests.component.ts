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
  user: User;
  emailContent: string;
  constructor(private router: Router, private route: ActivatedRoute, private service: RequestsService) {
    this.requests = new Set<User>();
    this.user = new User();
  }

  ngOnInit(): void {
    this.service.getRequests().subscribe(data => {this.requests = data;
    });
  }

  decline_request(email: string) {
    this.service.removeRequest(email, this.emailContent).subscribe(result => this.router.navigate(['/deleterequest']));
  }

  accept_request(email: string) {
    this.service.acceptRequest(email).subscribe(result => this.router.navigate(['/acceptrequest']));
  }
}

