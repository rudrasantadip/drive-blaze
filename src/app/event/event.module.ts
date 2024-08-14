
// Angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import {HttpClientModule} from '@angular/common/http'


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



import { EventComponent } from './event/event.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { TableModule } from 'primeng/table';




@NgModule({
  declarations: [
    EventComponent,
    WorkshopComponent,
    HackathonComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,


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
    TableModule

    
  ],
  exports:[EventRoutingModule]
})
export class EventModule { }
