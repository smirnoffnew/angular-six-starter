/**
 * Created by hkuehl on 08.05.2017.
 */
import {Component, OnInit} from '@angular/core';
import {CountdownService} from '../../../../core/countdown.service/countdown.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-flip-clock',
  templateUrl: 'flip-clock.component.html',
  styleUrls: ['flip-clock.component.scss']
})

export class FlipClockComponent implements OnInit {
  timeSub: any = this.countdownService.timeSub$;
  days$: any = 0;
  hours$: any = 0;
  minutes$: any = 0;
  seconds$: any = 0;

  constructor(private countdownService: CountdownService) {
  }

  ngOnInit() {
    this.days$ = this.timeSub.pipe(map((data: number) => Math.floor(data / 3600 / 24)));
    this.hours$ = this.timeSub.pipe(map((data: number) => Math.floor((data - (Math.floor(data / 3600 / 24) * 3600 * 24)) / 3600)));
    this.minutes$ = this.timeSub.pipe(map((data: number) =>
      Math.floor((data - (
        Math.floor(data / 3600 / 24) * 3600 * 24 +
        Math.floor((data - (
        Math.floor(data / 3600 / 24) * 3600 * 24)) / 3600) * 3600)) / 60)
    ));

    this.seconds$ = this.timeSub.pipe(map((data: number) =>
      Math.floor(data -
        Math.floor(data / 3600 / 24) * 3600 * 24 -
        Math.floor((data - (Math.floor(data / 3600 / 24) * 3600 * 24)) / 3600) * 3600 -
        Math.floor((data - (Math.floor(data / 3600 / 24) * 3600 * 24 + Math.floor((data - (
        Math.floor(data / 3600 / 24) * 3600 * 24)) / 3600) * 3600)) / 60) * 60)
    ));
  }

}
