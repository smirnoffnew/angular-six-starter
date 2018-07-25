import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config:any = {
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true,
    maxParticles: 100,
    sizeVariations:2,
    speed: 0.4,
    minDistance: 150
  };

  constructor() {
  }


  ngOnInit() {
  }

}
