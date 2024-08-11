import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { TeamRoutingModule } from './team-routing.module';



@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TeamRoutingModule]
})
export class TeamModule { }
