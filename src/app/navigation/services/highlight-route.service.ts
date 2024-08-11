import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightRouteService {

  private activeRoute = new BehaviorSubject<number>(-1);
  activeRouteIndex$=this.activeRoute.asObservable();

  //method to mark the route index that is currently active
  setActiveRouteIndex(index: number) {
    this.activeRoute.next(index);
  }

  constructor() { }
}
