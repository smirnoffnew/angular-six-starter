import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountdownService {
    private currentYear: number = new Date().getFullYear();
    public progress$:any = new BehaviorSubject(this.calculateYearProgress());

    constructor() {
        this.start();
    }

    start() {
        setInterval(() => {
            this.progress$.next(this.calculateYearProgress());
        }, 100000);
    }

    calculateYearProgress() {
      return 100 - Number((100 * this.getSeconsPast()/this.getSecondsVolInCurrentYear()).toFixed(3));
    }

    getSecondsVolInCurrentYear() {
        let newYear: number = this.currentYear + 1;
        return (new Date(`01/01/${newYear.toString()}`).getTime() / 1000) - (new Date(`01/01/${this.currentYear.toString()}`).getTime() / 1000)
    }

    getSeconsPast() {
        return ((new Date('01/01/2019').getTime() / 1000) - (new Date().getTime() / 1000));
    }


}
