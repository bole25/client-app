import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../../models/user.model';
import {DoctorInfoService} from './doctor-info.service';


@Component({
  selector: 'app-users',
  templateUrl: './doctor-info.component.html'
})

export class DoctorInfoComponent implements OnInit {
  user: User;
  user1: User;
  newfirstName: string;
  email: string;
  firstName: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: DoctorInfoService) {
    this.user = new User();
    this.user1 = new User();
    const user = JSON.parse(localStorage.getItem('user'));

  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onSubmit() {
    this.updatePersonalInfo(this.user.email, this.newfirstName);


  }

  updatePersonalInfo(email: string, newfirstName: string) {
    this.service.updatePersonalInfo(email, newfirstName).subscribe(result => {
      this.router.navigate(['/']);
      localStorage.clear();
      alert('Changed personal info!');
    }, error => {
      alert('Error');
    });
  }

  get filled() {
    if (this.newfirstName === '' || this.newfirstName == null) {
      return false;
    } else {
      return true;
    }
  }


}
