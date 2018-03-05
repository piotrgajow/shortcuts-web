import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {

    let fixture: ComponentFixture<MainMenuComponent>;
    let component: MainMenuComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainMenuComponent,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents().then().catch();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainMenuComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

});
