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
        this.flag = this.number ? this.number.toString().length > 2 : false;
        if(!this.number && this.number !== 0) return;
        let stringChar = this.number.toString().split('');
        if(stringChar.length === 1) {
            stringChar.push(stringChar[0]);
            stringChar[0] = '0';
        }
        if(this.tiles.length === stringChar.length) {
            for (let i = 0; i < this.tiles.length; i++) {
                this.tiles[i] = Number(stringChar[i]);
            }
        } else {
            this.tiles = [];
            for (let digit of stringChar) {
                this.tiles.push(Number(digit));
            }
        }
    }
}