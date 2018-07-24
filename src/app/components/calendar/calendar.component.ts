import {Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, AfterViewInit {


    constructor(public elementRef: ElementRef) {
    }


    ngOnInit() {
    }

    ngAfterViewInit() {
    }


}
