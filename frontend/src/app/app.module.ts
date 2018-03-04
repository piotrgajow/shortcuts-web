import { HttpClientModule  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { TimePipe } from './pipes/time.pipe';
import { BackendService } from './services/backend.service';
import { RouteService } from './services/route.service';
import { TripService } from './services/trip.service';
import { RouteListViewComponent } from './views/route-list/route-list-view.component';
import { RouteSelectionViewComponent } from './views/route-selection/route-selection-view.component';
import { TripViewComponent } from './views/trip/trip-view.component';

@NgModule({
    bootstrap: [AppComponent],
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
})
export class AppModule {
}
