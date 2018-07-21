/**
 * Created by smirnoff on 20.07.18.
 */
import {NgModule} from '@angular/core';
import {routing} from './calendar.routing';
import {CalendarComponent} from "./calendar.component";
import {InfiniteCalendarModule} from "ng-infinite-calendar";
import {MatModule} from "../../mat.module";

@NgModule({
    declarations: [ CalendarComponent ],
    imports: [InfiniteCalendarModule, MatModule, routing],
    providers: []
})
export class CalendarModule {}