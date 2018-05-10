import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LocalDateTime } from 'js-joda';

@Component({
    selector: 'sc-main-menu',
    templateUrl: './main-menu.component.html',
})
export class MainMenuComponent {

    constructor(
        private readonly router: Router,
    ) {
    }

    startTrip(): void {
        this.router.navigate(['/newTrip', LocalDateTime.now().toString()]).then().catch();
    }

}
