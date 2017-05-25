import { Component } from '@angular/core';

@Component({
    selector: 'main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {
  registerNewTrip(): void {
    console.log('registerNewTrip');
  }
}
