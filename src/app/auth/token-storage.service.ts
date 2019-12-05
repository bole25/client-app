import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// uloga ce trebati

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'username';
const ROLES_KEY = 'roles';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {
  // tslint:disable-next-line:ban-types
  private isLoggedIn = new Subject<Boolean>();
  // tslint:disable-next-line:ban-types
  private username = new Subject<String>();

  public isSysAdmin = false;


  constructor() {
    this.isLoggedIn.next(false);
  }
}



