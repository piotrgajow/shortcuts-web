import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {

    let fixture: ComponentFixture<MainMenuComponent>;
    let component: MainMenuComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainMenuComponent,
            ],
            imports: [
                MatToolbarModule,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainMenuComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

});
