import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoBackgroundComponent } from './video-bg/video-background/video-background.component';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { EventModule } from './event/event.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    VideoBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // Custom modules
    NavigationModule,
    HomeModule,
    EventModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
