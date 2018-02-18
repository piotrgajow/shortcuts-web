import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {

    let fixture: ComponentFixture<MainMenuComponent>;
    let component: MainMenuComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
            declarations: [
                MainMenuComponent,
            ],
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
