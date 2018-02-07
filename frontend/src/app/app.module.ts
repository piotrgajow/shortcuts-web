import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { RouteListViewComponent } from './views/route-list/route-list-view.component';
import { RouteService } from './services/route.service';
import { TripViewComponent } from './views/trip/trip-view.component';
import { TripService } from './services/trip.service';
import { TimePipe } from './pipes/time.pipe';
import { RouteSelectionViewComponent } from './views/route-selection/route-selection-view.component';
import { BackendService } from './services/backend.service';

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent,
        RouteListViewComponent,
        RouteSelectionViewComponent,
        TripViewComponent,
        TimePipe,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
    ],
    providers: [
        BackendService,
        RouteService,
        TripService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
