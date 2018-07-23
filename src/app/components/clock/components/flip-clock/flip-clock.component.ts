/**
 * Created by hkuehl on 08.05.2017.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'flip-clock',
    templateUrl: 'flip-clock.component.html',
    styleUrls: ['flip-clock.component.scss']
})

export class FlipClockComponent implements OnInit {
    currNumber: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;

    constructor() {
        this.currNumber = ((new Date('01/01/2019').getTime()/1000) - (new Date().getTime()/1000));
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

    ngOnInit() {
        this.start();
    }

    start() {
        setInterval(() => {
            this.currNumber--;
            this.splitNumber();
        }, 1000);
    }

    private splitNumber() {
        this.days = Math.floor(this.currNumber / 3600 / 24);
        let tmp = this.currNumber - (this.days * 3600 * 24);
        this.hours = Math.floor(tmp/3600);
        let asdf = this.days*3600*24 + this.hours*3600;
        this.minutes =  Math.floor( (this.currNumber - asdf)/60 );
        this.seconds = Math.floor(this.currNumber - this.days*3600*24 - this.hours*3600 - this.minutes*60);
    }
}