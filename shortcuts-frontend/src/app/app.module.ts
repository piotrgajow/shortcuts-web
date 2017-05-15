import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainMenuComponent } from './main/main-menu.component';
import { RouteComponent } from './route/route.component';
import { RouteFormComponent } from './route/form/route-form.component';
import { RouteSelectorComponent } from './route/selector/route-selector.component';
import { RouteService } from './route/route.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    RouteComponent,
    RouteFormComponent,
    RouteSelectorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
