import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventsComponent } from './events/events.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FAQComponent } from './faq/faq.component';
import { ListComponent } from './events/list/list.component';
import { DetailComponent } from './events/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ScheduleComponent,
    EventsComponent,
    SponsorsComponent,
    FAQComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
