import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TechTitanTechdownRoutingModule } from './techtitantechdown-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
  ,exports:[TechTitanTechdownRoutingModule]
})
export class TechtitantechdownModule { }
