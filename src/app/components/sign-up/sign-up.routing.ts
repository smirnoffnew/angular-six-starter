/**
 * Created by smirnoff on 20.07.18.
 */
import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from "../../core/auth.guard.service";
import {SignUpComponent} from './sign-up.component';

export const routs = [
    {
        path: '',
        component: SignUpComponent,
        canActivate: [AuthGuard],
        children: []
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routs);