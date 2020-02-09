import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vacationrequest} from '../../models/vacationrequest.model';
import {User} from '../../models/user.model';
import {VacationApproveService} from './vacationApprove.service';

@Component({
  selector: 'app-cadmin',
  templateUrl: './vacationApprove.component.html'
})

export class VacationApproveComponent implements OnInit {
  requests: Set<Vacationrequest>;
  user: User;
  emailContent: string;
  constructor(private router: Router, private route: ActivatedRoute, private service: VacationApproveService) {
    this.requests = new Set<Vacationrequest>();
    this.user = new User();
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.user = user;
    this.service.getRequests(this.user.email).subscribe(data => {this.requests = data;
    });
  }

  /*decline_request(email: string) {
    this.service.removeRequest(email, this.emailContent).subscribe(result => this.router.navigate(['/deleterequest']));
  }

  accept_request(email: string) {
    this.service.acceptRequest(email).subscribe(result => this.router.navigate(['/acceptrequest']));
  }*/
  accept_request(email: string) {

  }

  decline_request(email: string) {

  }
}

