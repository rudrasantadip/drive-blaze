import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //event date
  private targetDate = new Date('September 28, 2024 00:00:00'); 

  //complex object for count down
  countdown = { days: 0, hours: 0, minutes: 0 };


  //variables for analog clock
  hourRotation = '';
  minuteRotation = '';
  secondRotation = '';
  amOrPm=''

  // time string for the digital clock
 timeString:string='00:00:00:AM';
 private intervalId: any;



  // clock ticking function
  tick()
  {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();
    
    this.hourRotation = `rotateZ(${(hh % 12) * 30 + mm / 2}deg)`;
    this.minuteRotation = `rotateZ(${mm * 6}deg)`;
    this.secondRotation = `rotateZ(${ss * 6}deg)`;

   
    const formattedHours = hh.toString().padStart(2, '0');
    const formattedMinutes = mm.toString().padStart(2, '0');
    const formattedSeconds = ss.toString().padStart(2, '0');
    const amPm = hh >= 12 ? 'PM' : 'AM';
   this.timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
    
  }


  // Count down from event date

  updateCountdown() {
    const now = new Date();
    const timeDifference = this.targetDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      this.countdown = { days: 0, hours: 0, minutes: 0 };
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    this.countdown = { days, hours, minutes };
  }

  ngOnInit(): void {
    // Clock functions
    this.tick();
    this.intervalId = setInterval(() => this.tick(), 1000); //updates every second

    //event count down
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 60000); // Update every minute
  }
}
