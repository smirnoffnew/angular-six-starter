import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'tile-group',
  templateUrl: 'tile-group.component.html'
})

export class TileGroupComponent implements OnInit, OnChanges {
  @Input() number: number;
  @Input() dots: boolean;
  tiles: number[];
  flag: boolean;

  constructor() {
    this.tiles = [];
    this.dots = true;
    this.flag = false;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.splitNumber();
  }

  private splitNumber() {
    if (!this.number && this.number !== 0) return;
    this.tiles = [];
    for (const digit of this.number.toString().split('')) {
      if (this.number.toString().split('').length === 1) {
        this.tiles.push(Number(0));
        this.tiles.push(Number(digit));
      } else {
        this.tiles.push(Number(digit));
      }

    }
    this.flag = this.tiles.length > 2;
  }
}
