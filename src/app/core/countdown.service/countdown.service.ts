import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  private currentYear: number = new Date().getFullYear();
  public progress$: any = new BehaviorSubject(this.calculateYearProgress());
  public timeSub$: Observable<any>;


  constructor() {
    this.start();

    this.timeSub$ = interval(1000)
      .pipe(map((x) =>  Math.floor((new Date('01/01/2019').getTime() / 1000) - (new Date().getTime() / 1000))));
  }

  start() {
    setInterval(() => {
      this.progress$.next(this.calculateYearProgress());
    }, 100000);

  }

  calculateYearProgress() {
    return 100 - Number((100 * this.getSeconsPast() / this.getSecondsVolInCurrentYear()).toFixed(3));
  }

  getSecondsVolInCurrentYear() {
    const newYear: number = this.currentYear + 1;
    return (new Date(`01/01/${newYear.toString()}`).getTime() / 1000) - (new Date(`01/01/${this.currentYear.toString()}`).getTime() / 1000);
  }

  getSeconsPast() {
    return ((new Date('01/01/2019').getTime() / 1000) - (new Date().getTime() / 1000));
  }

}
