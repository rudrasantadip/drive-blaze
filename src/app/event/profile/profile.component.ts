import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Member, Team } from 'src/app/dtos/teamsDto';
import { MessageService } from 'primeng/api';

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
  providers: [MessageService]
})
export class ProfileComponent implements OnInit, OnDestroy {

  //variable to store username
  userName: string;
  memberDesignation:string;
  // subscribtions
  private subscription: Subscription;
  private teamSubscription: Subscription;

  // form to create a team;
  createButtonDisabled: boolean = true;
  teamCreate = {
    fullName: '',
    teamName: '',
    userName: '',
  };

  // form to join a team
  teamJoin = {
    fullName: '',
    teamCode: '',
    userName: '',
  };

  application = {
    leaderName: '',
    teamName: '',
    teamCode: '',
    collegeName: '',
  };

  //variable to check if a team exists
  teamExists: boolean = false;

  selectedCity!: any;
  ingredient: any;

  //variable to hold the selected file
  selectedFile: File;

  //event timeline
  events: EventItem[];

  submitApplication: boolean = false;
  timeline: boolean = false;
  overview: boolean = false;
  teammembers: boolean = false;

  // team creation section
  createTeam: boolean = false;
  joinTeam: boolean = false;

  //team variable
  team: Team;

  constructor(private teamService: TeamService, 
    private router: Router,
    private messageService: MessageService) {
    this.events = [
      {
        status: 'Registrations Begin',
        date: '20/08/2024 12:00 AM',
        icon: 'pi pi-calendar-plus',
        color: '#9C27B0',
        image: '',
      },
      {
        status: 'Registration Ends',
        date: '15/8/2024 12:00 AM',
        icon: 'pi pi-caret-right',
        color: '#673AB7',
      },
      {
        status: 'Selection Starts',
        date: '15/8/2024 6:00 AM',
        icon: 'pi pi-directions',
        color: '#FF9800',
      },
      {
        status: 'Selected Teams will be invited',
        date: '28/8/2024 10:00 AM',
        icon: 'pi pi-check',
        color: '#607D8B',
      },
    ];
  }

  // function to create a team
  onTeamCreate() {
    const user: string = localStorage.getItem('username');
    this.teamService
      .createTeam(this.teamCreate.teamName, this.teamCreate.fullName, user)
      .subscribe((response) => {
        if (response.status == true) {
          console.log(response.message);
          localStorage.setItem('teamcode', response.message);
          alert('team created successfully');
          this.router.navigate(['/events/hackathon']);
        }
      });
  }
  // function to join a team
  onTeamJoin() {
    const user: string = localStorage.getItem('username');
    this.teamService
      .joinTeam(this.teamJoin.teamCode, user, this.teamJoin.fullName)
      .subscribe((response) => {
        if (response.status == true) {
          console.log(response.message);
          localStorage.setItem('teamcode', response.message);
          alert('team joined successfully');
          this.router.navigate(['/events/hackathon']);
        }
      });
  }

  // functions
  showCreateTeam() {
    this.joinTeam = false;
    this.createTeam = !this.createTeam;
  }

  showJoinTeam() {
    this.createTeam = false;
    this.joinTeam = !this.joinTeam;
  }

  // create team ends

  //method to call when component is created
  ngOnInit() {
    this.getTeamByCode();

    this.userName = localStorage.getItem('username');

    //function to check if the user has a team
    this.subscription = this.teamService.hasaTeam(this.userName).subscribe(
      (response) => 
      {
        if (response.status == true) {
          this.teamExists = true;
        }
      }
     
  //Assign Values
  );

   //function to retrieve member designation
   this.teamService.getMemberDesignation(this.userName)
   .subscribe(
    (response)=>{
      this.memberDesignation=response.message;
    }
   )
  }

  // method to call when component is destroyed
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //upload file
  onUpload(event: any) {
    this.selectedFile = event.target.files[0];
  }

  //submit application
  onSubmit() {
    if (!this.selectedFile) {
     this.messageService.add({ severity: 'warn', summary: 'Ward', detail: 'Please enter a file' });
    } else {
      let formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile?.name);
      formData.append('leaderName', this.application.leaderName);
      formData.append('teamName', this.application.teamName);
      formData.append('instituteName', this.application.collegeName);
      formData.append('teamCode', this.application.teamCode);
      formData.append('username',this.userName);

      this.teamService.submitApplication(formData).subscribe((response) => {
        if(response.status==true)
        {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Idea Submitted Successfully' });
          formData=new FormData();
          this.resetForm();
        }
        else{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Some error occured' });
        }
      });
    }
  }


  // reset form
  resetForm()
  {
    (document.getElementById('submit-application') as HTMLFormElement).reset(); //reset controls
    (document.querySelector('input') as HTMLInputElement).value = '';
    this.selectedFile=null;    
  }

  // show event
  applicationSubmit() {
    this.timeline = false;
    this.overview = false;
    this.teammembers = false;
    this.submitApplication = !this.submitApplication;
  }

  showtimeline() {
    this.overview = false;
    this.teammembers = false;
    this.submitApplication = false;
    this.timeline = !this.timeline;
  }

  showoverView() {
    this.submitApplication = false;
    this.teammembers = false;
    this.timeline = false;
    this.overview = !this.overview;
  }

  //function to toggle team members button
  showTeamMembers() {
    this.submitApplication = false;
    this.timeline = false;
    this.overview = false;
    this.teammembers = !this.teammembers;

    if (this.teammembers == true) {
      this.getTeamByCode();
    }
  }
  //function to fetch team information
  getTeamByCode() {
    this.teamService
      .getTeamByCode(localStorage.getItem('teamcode'))
      .subscribe((response) => {
        this.team = response;
      });
  }

  // function to remove a member
  removeMember(member: Member) 
  {
    this.teamService.removeMember(
      localStorage.getItem('username')
      ,member.username,
      this.team.teamCode
    )
    .subscribe(
      (response)=>{
        if(response.message=='success')
        {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: member.memberName+' has been removed' });
          this.getTeamByCode();
        }
      }
    )
  }



  // functiont to logout
  logout() {
    this.router.navigate(['/events/hackathon']);
    this.subscription.unsubscribe();
  }
}
