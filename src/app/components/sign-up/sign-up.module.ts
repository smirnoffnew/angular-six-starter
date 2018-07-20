/**
 * Created by smirnoff on 20.07.18.
 */
import {NgModule} from '@angular/core';
import {routing} from './sign-up.routing';
import {SignUpComponent} from './sign-up.component';

@NgModule({
    declarations: [ SignUpComponent ],
    imports: [routing],
    providers: []
})
export class SignUpModule {}