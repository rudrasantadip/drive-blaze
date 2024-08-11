import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'schedule',
    loadChildren:()=>import('./schedule/schedule.module').then(m=>m.ScheduleModule)
  },
  {
    path:'events',
    loadChildren:()=>import('./event/event.module').then(m=>m.EventModule)
  },
  {
    path:'activities',
    loadChildren:()=>import('./activity/activity.module').then(m=>m.ActivityModule)
  },
  {
    path:'sponsor',
    loadChildren:()=>import('./sponsors/sponsors.module').then(m=>m.SponsorsModule)
  },
  {
    path:'team',
    loadChildren:()=>import('./team/team.module').then(t=>t.TeamModule)
  },

  {
    path:'contact',
    loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)
  },
 
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
