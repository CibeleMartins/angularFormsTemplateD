import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
        ReactiveFormsModule
    ]
})
export class AppModule { }
