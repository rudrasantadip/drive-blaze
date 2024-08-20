import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  events28 = [
    { title: 'Hackathon', time: ' 28th September, 2024 11:00AM - 29th September, 2024 05:00PM', description: 'Venue: RRR Hall' },
    { title: 'Tech Photography Contest', time: ' 28th September, 2024 11:00AM - 29th September, 2024 03:00PM', description: 'Venue: B1 LG 3.1' },
    { title: 'CeleBharat Summit', time: '12:00 PM', description: ' Board Room' },
    { title: 'Corporate Exhibition', time: '28th September, 2024 11:00AM - 29th September, 2024 03:00PM', description: 'B1-B2 Corridoor  ' },
    { title: 'Workshop: Full Stack Web Development with React and Node.js', time: '02:00 PM', description: 'Venue:  B3 FICCI Auditorium' },
    { title: 'Yukti Yagna', time: ' 28th September, 2024 - 11:00AM', description: 'Venue: B1 LG 0.4' },
    { title: 'Tech Titan Takedown', time: ' 28th September, 2024 - 02:00PM - 05:00PM', description: 'Venue: B3 LG 1.4' }
  ];

  events29 = [
    { title: 'Hackathon', time: ' 28th September, 2024 11:00AM - 29th September, 2024 05:00PM', description: 'Venue: RRR Hall' },
    { title: 'Tech Photography Contest', time: ' 28th September, 2024 11:00AM - 29th September, 2024 03:00PM', description: 'B1 LG 3.1' },
    { title: 'CeleBharat Summit', time: '12:00 PM', description: ' Board Room' },
    { title: 'Corporate Exhibition', time: '28th September, 2024 11:00AM - 29th September, 2024 03:00PM', description: 'Venue: B1-B2 Corridoor  ' },
    { title: 'Tech Talks', time: ' 29th September, 2024 - 11:00AM', description: 'Venue: B3 FICCI Auditorium' },
    { title: 'Web Dev Challange', time: ' 29th September, 2024 - 02:00PM - 05:00PM', description: 'Venue: CCFL - III' },
    { title: 'Magazine Publication', time: '28th September, 2024 - 06:00PM', description: ' B3 FICCI Auditorium' }
  ];
}
