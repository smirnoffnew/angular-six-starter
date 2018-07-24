import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import {CountdownService} from "../../core/countdown.service/countdown.service";

@Component({
    selector: 'app-home',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, AfterViewInit {
    public progress: number;

    constructor(public countdownService: CountdownService) {
    }


    ngOnInit() {
        this.countdownService.progress$.subscribe(
            (prg) => {
                this.progress = prg;
            },
            (error) => {
                console.log('errrr');
            })
    }

    ngAfterViewInit() {

    }


}
