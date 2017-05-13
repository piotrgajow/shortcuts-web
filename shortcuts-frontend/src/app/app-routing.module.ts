import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './main/main-menu.component';

const routes: Routes = [
  { path: 'menu', component: MainMenuComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
