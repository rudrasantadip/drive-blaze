import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HighlightRouteService } from './navigation/services/highlight-route.service';
import { NavigationEnd, Router } from '@angular/router';
import { routes } from './navigation/navbar/navbar.component';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  
  title = 'drive-blaze';


  constructor(
   
    private ngxService:NgxUiLoaderService,
    private router:Router)
    {}
  

  // active route circle
  @ViewChildren("circle") private circles:QueryList<ElementRef>

  //active route index
  activeRouteIndex:number=-1;


  ngOnInit(): void {
    this.ngxService.start();
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 3000);
  }

  ngAfterViewInit(): void {
    //highlighting the currently active route

    this.router.events.subscribe(
      (event)=>{
        if(event instanceof NavigationEnd)
        {
          const activeRouteIndex = routes.findIndex(route =>
          this.router.url.includes(route.routerLink));
          
          //removing the active class from every class before adding a new active element
          this.circles.forEach(
            (circle)=>{
              circle.nativeElement.classList.remove('route-active');
            }
          )

          //since the workshop is a child component of event moduke
          //it cannot be directly accessed so access it seperately
          if(this.router.url.includes('workshop'))
          {
            this.circles.get(3).nativeElement.classList.add('route-active');
          }
          else{
            this.circles.get(activeRouteIndex).nativeElement.classList.add('route-active');
          }
        }
      }
    )
    // this.circles.get(this.activeRouteIndex).nativeElement.classList.remove('route-active');
  }
}
