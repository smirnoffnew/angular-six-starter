/**
 * Created by smirnoff on 20.07.18.
 */
import {NgModule} from '@angular/core';
import {routing} from './sign-in.routing';
import {SignInComponent} from './sign-in.component';

@NgModule({
    declarations: [SignInComponent],
    imports: [routing],
    providers: []
})
export class SignInModule {
}