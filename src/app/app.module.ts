import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        GoogleMapsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
