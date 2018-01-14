import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainMenuComponent } from './shared/menu/main-menu.component';
import { RouteFormComponent } from './route/form/route-form.component';
import { RouteListComponent } from './route/list/route-list.component';
import { RouteSelectorComponent } from './route/selector/route-selector.component';
import { RouteService } from './route/route.service';
import { TripViewComponent } from './trip/trip-view.component';
import { TripService } from './trip/trip.service';
import { TimePipe } from './shared/time.pipe';

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent,
        RouteFormComponent,
        RouteListComponent,
        RouteSelectorComponent,
        TripViewComponent,
        TimePipe,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule,
    ],
    providers: [
        RouteService,
        TripService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
