// feature-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorComponent } from './sponsor/sponsor.component';


export const routes: Routes = [
  { path: '', component: SponsorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorRoutingModule { }
