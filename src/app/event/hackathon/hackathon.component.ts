import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.css']
})
export class HackathonComponent {
activeIndex: number;
  events: string[];

constructor(private router:Router){
  this.events = [
    "2020", "2021", "2022", "2023"
];
}

goto(url:string)
{
  this.router.navigate([url]);
}

}
