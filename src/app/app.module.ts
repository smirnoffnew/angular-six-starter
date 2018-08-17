import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatModule} from "./mat.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {routing} from "./routing";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppComponent} from './app.component';
import {AuthGuard} from "./core/auth.guard.service";
import {CountdownService} from "./core/countdown.service/countdown.service";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatModule,
        routing
    ],
    exports: [BrowserModule],
    providers: [AuthGuard, CountdownService,],
    bootstrap: [AppComponent]
})
export class AppModule {
}
