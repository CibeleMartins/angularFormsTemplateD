import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormsReactiveComponent } from './components/forms-reactive/forms-reactive.component';

@NgModule({
    declarations: [
        AppComponent,
        FormsReactiveComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
    ]
})
export class AppModule { }
