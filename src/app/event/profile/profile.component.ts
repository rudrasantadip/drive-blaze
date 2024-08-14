import { Component, OnInit, signal } from '@angular/core';
import { TeamService } from '../services/team.service';

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

   // form to create a team;
   createButtonDisabled:boolean=true;
   teamCreate={
    fullName:'',
    teamName:'',
    userName:''
  }

  // form to join a team
  teamJoin={
    fullName:'',
    teamCode:'',
    userName:''
  }

  //variable to check if a team exists
  teamExists:boolean=true;

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

  // team creation section
  createTeam:boolean=false;
  joinTeam:boolean=false;

  constructor(private teamService:TeamService) {
    this.events = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ];
  }

  // function to create a team
  onTeamCreate()
  {
    const user:string=localStorage.getItem('username');
    this.teamService.createTeam(
      this.teamCreate.teamName,
      this.teamCreate.fullName,
      user
    ).subscribe(
      {
       next:(response)=>{
        console.log(response);
       },
       error:(err)=>{
       alert('Some error occured, probably you are already in a team or a leader')
       }
      }
      
      
    )
  }
  // function to join a team
  onTeamJoin()
  {
    const user:string=localStorage.getItem('username');
    this.teamService.joinTeam(
      this.teamJoin.teamCode,
      this.teamJoin.fullName,
      user
    ).subscribe(
      {
        next:(response)=>{
          alert(response.message)
        },
        error:(err)=>{
          console.log(err.message)
        }
      }
    )
  }

  // functions
  showCreateTeam()
  {
    this.joinTeam=false;
    this.createTeam=!this.createTeam;
  }

  showJoinTeam()
  {
    this.createTeam=false;
    this.joinTeam=!this.joinTeam;
  }

  // create team ends


 
  ngOnInit() 
  {
    
  }

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
