import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { Cpn1Component } from './cpn1/cpn1.component';
import { Cpn2Component } from './cpn2/cpn2.component';

@NgModule({
  declarations: [
    AppComponent,
    Cpn1Component,
    Cpn2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
