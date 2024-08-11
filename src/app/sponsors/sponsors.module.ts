import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorRoutingModule } from './sponsors-routing.module';



@NgModule({
  declarations: [
    SponsorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SponsorRoutingModule]
})
export class SponsorsModule { }
