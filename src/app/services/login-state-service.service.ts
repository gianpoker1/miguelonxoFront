import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStateServiceService {

  private loginStatus = new BehaviorSubject<boolean>(false);
  currentLoginStatus = this.loginStatus.asObservable();

  constructor() { }

  changeLoginState(status: boolean){
    this.loginStatus.next(status);
  }
}
