import { TestBed, ComponentFixture, async, } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
            declarations: [
                AppComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

});
