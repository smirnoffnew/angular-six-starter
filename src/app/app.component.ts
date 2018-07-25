import { Component } from '@angular/core';
import {CountdownService} from "./core/countdown.service/countdown.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'app';
  public progress: number;
  style: object = {};
  params: object = {};
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

    this.style = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.params = {
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

}
