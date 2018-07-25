import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import {CountdownService} from "../../core/countdown.service/countdown.service";


@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {
    public progress: number;
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;

    constructor(public countdownService: CountdownService) {
    }


    ngOnInit() {
        this.countdownService.progress$.subscribe(
            (prg) => {
                this.progress = prg;
            },
            (error) => {
                console.log('errrr');
            });

        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

        this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'triangle',
                },
            }
        };
    }


    ngAfterViewInit() {
        $('.nav-button').trigger( "click" );
    }


}
