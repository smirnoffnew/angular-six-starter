/**
 * Created by smirnoff on 20.07.18.
 */
import {NgModule} from '@angular/core';
import {routing} from './home.routing';
import {HomeComponent} from "./home.component";
import {InfiniteCalendarModule} from "ng-infinite-calendar";

@NgModule({
    declarations: [ HomeComponent ],
    imports: [InfiniteCalendarModule, routing],
    providers: []
})
export class Home2Module {}