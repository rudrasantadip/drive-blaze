import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  activeIndex: number = 0;

  constructor(private router:Router){}

  goto(routerlink:string)
  {
    this.router.navigate([routerlink]);
  }
}
