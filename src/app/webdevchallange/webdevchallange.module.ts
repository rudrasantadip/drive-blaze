import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WebDevChallangeRoutingModule } from './webdevchallange-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[WebDevChallangeRoutingModule]
})
export class WebdevchallangeModule { }
