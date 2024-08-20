import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoBackgroundComponent } from './video-bg/video-background/video-background.component';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { EventModule } from './event/event.module';
import { ContactModule } from './contact/contact.module';
import { ScheduleModule } from './schedule/schedule.module';
import { FooterComponent } from './footer/footer.component';

import { Toast, ToastModule } from 'primeng/toast';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule ,NgxUiLoaderHttpModule} from 'ngx-ui-loader';


@NgModule({
  declarations: [
    AppComponent,
    VideoBackgroundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // Custom modules
    NavigationModule,
    HomeModule,
    EventModule,
    ContactModule,
    ScheduleModule,
    ToastModule,
    BrowserAnimationsModule,

    // Loader Module
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule.forRoot(
      {showForeground:true}
    ),
    NgxUiLoaderHttpModule.forRoot({showForeground:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
