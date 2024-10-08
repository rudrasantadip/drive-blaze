
// Angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';



import { AppRoutingModule } from '../app-routing.module';
import { EventComponent } from './event/event.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TableModule } from 'primeng/table';
import { ContestComponent } from './contest/contest.component';
import { EventRegisterComponent } from './event-register/event-register.component';




@NgModule({
  declarations: [
    EventComponent,
    WorkshopComponent,
    HackathonComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ContestComponent,
    EventRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    // prime ng modules
    CardModule,
    ButtonModule,
    SplitterModule,
    TabViewModule,
    TimelineModule,
    InputTextModule,
    PanelMenuModule,
    ListboxModule,
    RadioButtonModule,
    FileUploadModule,
    ToastModule,
    TableModule,
    ConfirmPopupModule
  ],
  exports:[EventRoutingModule]
})
export class EventModule { }
