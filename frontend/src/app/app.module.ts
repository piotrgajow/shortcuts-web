import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainMenuComponent } from './shared/menu/main-menu.component';
import { RouteFormComponent } from './route/form/route-form.component';
import { RouteListComponent } from './route/list/route-list.component';
import { RouteSelectorComponent } from './route/selector/route-selector.component';
import { RouteService } from './route/route.service';
import { TimerComponent } from './timer/timer.component';
import { TripComponent } from './trip/trip.component';
import { TripService } from './trip/trip.service';
import { TimePipe } from './shared/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    RouteFormComponent,
    RouteListComponent,
    RouteSelectorComponent,
    TimerComponent,
    TripComponent,
    TimePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      RouteService,
      TripService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
