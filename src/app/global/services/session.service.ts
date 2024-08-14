import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  isLoggedin = new BehaviorSubject<boolean>(false);
  currentStatus=this.isLoggedin.asObservable();
  constructor() { }

  updateStatus(status:boolean)
  {
    this.isLoggedin.next(status);
  }
}
