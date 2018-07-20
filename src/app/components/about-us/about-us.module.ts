/**
 * Created by smirnoff on 20.07.18.
 */
import {NgModule} from '@angular/core';
import {routing} from './about-us.routing';
import {AboutUsComponent} from './about-us.component';

@NgModule({
    declarations: [ AboutUsComponent ],
    imports: [routing],
    providers: []
})
export class AboutUsModule {}