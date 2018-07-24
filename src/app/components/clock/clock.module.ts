import {NgModule} from '@angular/core';
import {ClockComponent} from './clock.component';
import {FlipClockComponent} from "./components/flip-clock/flip-clock.component";
import {NumberComponent} from "./components/number/number.component";
import {TileComponent} from "./components/tile/tile.component";
import {TileGroupComponent} from "./components/tile-group/tile-group.component";
import {LabelComponent} from "./components/tile-group/label/label.component";
import {DotsComponent} from "./components/dots/dots.component";
import {CommonModule} from '@angular/common';
import {routing} from "./clock.routing";

@NgModule({
    declarations: [
        ClockComponent,
        FlipClockComponent,
        TileGroupComponent,
        TileComponent,
        NumberComponent,
        LabelComponent,
        DotsComponent
    ],
    imports: [CommonModule, routing],
    bootstrap: [ClockComponent]
})

export class ClockModule {
}
