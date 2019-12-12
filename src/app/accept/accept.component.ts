import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AcceptService} from './accept.service';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})

export class AcceptComponent implements OnInit {
  id$: Observable<string>;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private service: AcceptService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.service.confirmAcc(this.id).subscribe(result => this.router.navigate(['/login']));
  }
}


