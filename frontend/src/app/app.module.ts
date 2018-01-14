import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainMenuComponent } from './shared/menu/main-menu.component';
import { RouteFormComponent } from './route/form/route-form.component';
import { RouteListComponent } from './route/list/route-list.component';
import { RouteService } from './route/route.service';
import { TripViewComponent } from './trip/trip-view.component';
import { TripService } from './trip/trip.service';
import { TimePipe } from './shared/time.pipe';
import { RouteSelectionViewComponent } from './route-selection/route-selection-view.component';

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent,
        RouteFormComponent,
        RouteListComponent,
        RouteSelectionViewComponent,
        TripViewComponent,
        TimePipe,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
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
