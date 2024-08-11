import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavItem } from '../navdtos';
import { HighlightRouteService } from '../services/highlight-route.service';


export let routes:NavItem[]=[
  {
    index: 0,
    routerLink: '/home',
    name: 'Home'
  },
  {
    index: 1,
    routerLink: '/schedule',
    name: 'Schedule'
  },
  {
    index: 2,
    routerLink: '/events',
    name: 'Events'
  },
  {
    index: 3,
    routerLink: '/events/workshop',
    name: 'Workshops'
  },
  {
    index: 4,
    routerLink: '/activities',
    name: 'Activities'
  },
  {
    index: 5,
    routerLink: '/sponsor',
    name: 'Sponsors'
  },
  {
    index: 6,
    routerLink: '/team',
    name: 'Team'
  },
  {
    index: 7,
    routerLink: '/contact',
    name: 'Contact'
  }
]
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private highlightRoute:HighlightRouteService)
  {

  }

  //oninit function
  ngOnInit(): void {
  }

  // function to go to home
  home(){
    this.router.navigate([routes[0].routerLink]);
  }

  // navbar routes
  getNavRoutes(start:number)
  {
    return routes.slice(start);
  }
}
