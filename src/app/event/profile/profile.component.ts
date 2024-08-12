import { Component, OnInit, signal } from '@angular/core';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  //variable to check if a team exists
  teamExists: true;

  selectedCity!: any;
  ingredient: any;

  //variable to hold the selected file
  selectedFile:File;

  //event timeline
  events: EventItem[];

  submitApplication:boolean=false
  timeline:boolean=false
  overview:boolean=false
  teammembers:boolean=false


  constructor() {
    this.events = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ];
  }
  ngOnInit() {}

  onUpload(event: Event) {
  }

  // show event
  applicationSubmit()
  {
    this.timeline=false;
    this.overview=false;
    this.teammembers=false;

    this.submitApplication=!this.submitApplication;
  }

  showtimeline()
  {
    this.overview=false;
    this.teammembers=false;
    this.submitApplication=false;

    this.timeline=!this.timeline;

  }

  showoverView()
  {
    this.submitApplication=false;
    this.teammembers=false;
    this.timeline=false;

    this.overview=!this.overview;
  } 

  showTeamMembers()
  {
    this.submitApplication=false;
    this.timeline=false;
    this.overview=false;

    this.teammembers=!this.teammembers;

  }

}
