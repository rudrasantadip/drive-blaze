import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent {


  constructor(private router:Router)
  {

  }

  events = [
    {
      title: 'Yukti Yagna',
      date: '28th September, 2024 - 11:00 AM',
      venue: 'B1 LG 0.4',
      description: 'A spiritual event aimed at mental well-being and inner peace.',
      image: 'assets/images/yuktiyagna.png',
      link: '/yukti-yagna'
    },
    {
      title: 'Tech Titan Takedown',
      date: '28th September, 2024',
      venue: 'B3 LG 1.4',
      description: 'A competitive event for tech enthusiasts to showcase their skills.',
      image: 'assets/images/techtitan.png',
      link: '/tech-titan-techdown'
    },
    {
      title: 'Web Dev Challenge',
      date: '28th September, 2024',
      venue: 'CCFL III',
      description: 'A challenge for web developers to build innovative solutions.',
      image: 'assets/images/webdev.png',
      link: '/web-dev-challange'
    },
    {
      title: 'Tech Photography Contest',
      date: '28th September, 2024',
      venue: 'B1 LG 3.1',
      description: 'A contest to capture the best tech moments through photography.',
      image: 'assets/images/techphoto.png',
      link: '/tech-photography-contest'
    }
  ];

  register(link: string) {
    this.router.navigate([link]);
  }
}
