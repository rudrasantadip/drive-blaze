import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { YuktiYagnaRoutingModule } from './yuktiyagna-routing.module';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
  ,exports:[YuktiYagnaRoutingModule]
})
export class YuktiyagnaModule { }
