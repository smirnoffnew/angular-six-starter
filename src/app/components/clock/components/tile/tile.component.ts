import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: 'tile.component.html',
  styleUrls: ['tile.component.scss']
})

export class TileComponent implements OnInit, OnChanges {
  @Input() nextNumber: number;

  currNumber: number;
  change: boolean;
  run: boolean;

  constructor() {
    this.change = false;
    this.currNumber = 0;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    requestAnimationFrame(() => this.runAnimation(changes));
  }

  runAnimation(changes) {
    const change = changes['nextNumber'];
    if (!change.firstChange) {
      this.currNumber = change.previousValue;
    }
    if (this.currNumber !== this.nextNumber) {
      this.run = true;
      this.change = !this.change;
    }
  }
}
