import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { ActivityRoutingModule } from './activity-routing.module';



@NgModule({
  declarations: [
    ActivityComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ActivityRoutingModule]
})
export class ActivityModule { }
