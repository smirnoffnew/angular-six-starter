/**
 * Created by smirnoff on 20.07.18.
 */
import {NgModule} from '@angular/core';
import {routing} from './home.routing';
import {HomeComponent} from "./home.component";

@NgModule({
    declarations: [ HomeComponent ],
    imports: [routing],
    providers: []
})
export class HomeModule {}