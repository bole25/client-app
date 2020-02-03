import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user.model';
import {HolidayRequestService} from './holiday-request.service';
import {Vacationrequest} from '../../models/vacationrequest.model';

@Component({

  selector: 'app-requests',
  templateUrl: 'holiday-request.component.html'
})

export class HolidayRequestComponent implements OnInit {

  requests: Set<User>;
  user: User;
  emailContent: string;
  vacReq: Vacationrequest;
  vacReqs: Set<Vacationrequest>;

  constructor(private router: Router, private route: ActivatedRoute, private service: HolidayRequestService) {
    this.requests = new Set<User>();
    this.user = new User();
    this.vacReq = new Vacationrequest();
    this.vacReqs = new Set<Vacationrequest>();
  }

  ngOnInit(): void {
    this.service.getRequests().subscribe(data => {
      this.requests = data;
    });
    this.service.getReqs().subscribe(data => {
      this.vacReqs = data;
    });

  }

  decline_request(email: string) {
    this.service.removeRequest(email, this.emailContent).subscribe(result => this.router.navigate(['/deleteHolidayRequest']));
  }

  accept_request(email: string) {
    this.service.acceptRequest(email).subscribe(result => this.router.navigate(['/acceptHolidayRequest']));
  }
}
