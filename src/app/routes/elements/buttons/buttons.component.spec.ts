/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { SharedModule } from "../../../shared/shared.module";
import { ButtonsComponent } from "./buttons.component";


describe('Component: Buttons', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [ButtonsComponent]
        });
    });

    it('should create an instance', async(() => {
        let fixture = TestBed.createComponent(ButtonsComponent);
        let comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
