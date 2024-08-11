import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';



@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ScheduleComponent,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
