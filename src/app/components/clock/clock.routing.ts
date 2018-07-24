/**
 * Created by smirnoff on 24.07.18.
 */
import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from "../../core/auth.guard.service";
import {ClockComponent} from "./clock.component";
import {FlipClockComponent} from "./components/flip-clock/flip-clock.component";

export const routs = [
    {
        path: '',
        component: ClockComponent,
        canActivate: [AuthGuard],
        children: []
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routs);