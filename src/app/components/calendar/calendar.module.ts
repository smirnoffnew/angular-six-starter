/**
 * Created by smirnoff on 20.07.18.
 */
import {NgModule} from '@angular/core';
import {routing} from './calendar.routing';
import {CalendarComponent} from "./calendar.component";
import {InfiniteCalendarModule} from "ng-infinite-calendar";
import {MatModule} from "../../mat.module";
import {CommonModule} from '@angular/common';
import {ClockModule} from "../clock/clock.module";
import { ParticlesModule } from 'angular-particle';

@NgModule({
    declarations: [ CalendarComponent ],
    imports: [CommonModule, InfiniteCalendarModule, MatModule, routing, ClockModule ],
    providers: []
})
export class CalendarModule {}