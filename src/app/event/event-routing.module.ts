// feature-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventModule } from './event.module';
import { EventComponent } from './event/event.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { sessionGuard } from '../global/guards/session.guard';



export const routes: Routes = [
  { path: '', component: EventComponent },
  {
    path:'workshop',component:WorkshopComponent
  },
  {
    path:'hackathon',component:HackathonComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'profile',component:ProfileComponent,canActivate:[sessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
