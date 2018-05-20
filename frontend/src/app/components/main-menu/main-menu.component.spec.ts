import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LocalDateTime } from 'js-joda';

import { mockRouter } from '../../utils/test-mocks.spec';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {

    let fixture: ComponentFixture<MainMenuComponent>;
    let component: MainMenuComponent;

    let router: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainMenuComponent,
            ],
            providers: [
                { provide: Router, useValue: mockRouter() },
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents().then().catch();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainMenuComponent);
        component = fixture.debugElement.componentInstance;
        router = fixture.debugElement.injector.get(Router);
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    describe('startTrip', () => {

        it('should redirect to new trip view', () => {
            router.navigate.and.returnValue(Promise.resolve({}));

            component.startTrip();

            expect(router.navigate).toHaveBeenCalled();
        });

    });

});
