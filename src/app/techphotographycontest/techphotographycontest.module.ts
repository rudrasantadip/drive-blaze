import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechPhotoGraphyContestRoutingModule } from './techphotographycontest-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
  ,exports:[TechPhotoGraphyContestRoutingModule]
})
export class TechphotographycontestModule { }
