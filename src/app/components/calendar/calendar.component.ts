import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import * as jquery from 'jquery';


interface JQuery{
  FlipClock():void;
}

@Component({
  selector: 'app-home',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, AfterViewInit {


  constructor(public elementRef: ElementRef) { }


  ngOnInit() {

    // $(function(){
    //   FlipClock.Lang.Custom = { days:'Days', hours:'Hours', minutes:'Minutes', seconds:'Seconds' };
    //   var opts = {
    //     clockFace: 'DailyCounter',
    //     countdown: true,
    //     language: 'Custom'
    //   };
    //
    //   var countdown = ((new Date('01/01/2019').getTime()/1000) - (new Date().getTime()/1000)); // from: 07/24/2018 10:50 pm +0300
    //
    //   countdown = Math.max(1, countdown);
    //   setTimeout( asdf, 2000);
    //
    //   function asdf(){
    //     $('.clock-builder-output').FlipClock(countdown, opts)
    //   }
    //
    // });
  }
  ngAfterViewInit(){
    // var jQuery: any;
    // $(<any>$(this.elementRef) as any).FlipClock({
    //   clockFace: 'TwentyFourHourClock'
    // });

  }



}
