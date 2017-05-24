import { Component } from '@angular/core';

@Component({
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {
  registerNewTrip(): void {
    console.log('registerNewTrip');
  }
}
