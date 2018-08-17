/**
 * Created by smirnoff on 20.07.18.
 */

import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './core/auth.guard.service';

const routes = [
    {
        path: 'home',
        loadChildren: './components/home/home.module#HomeModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'calendar',
        loadChildren: './components/calendar/calendar.module#CalendarModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'sign-up',
        loadChildren: './components/sign-up/sign-up.module#SignUpModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'sign-in',
        loadChildren: './components/sign-in/sign-in.module#SignInModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'about-us',
        loadChildren: './components/about-us/about-us.module#AboutUsModule',
        canLoad: [AuthGuard]
    },

    {
        path: 'clock',
        loadChildren: './components/clock/clock.module#ClockModule',
        canLoad: [AuthGuard]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'calendar'
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
