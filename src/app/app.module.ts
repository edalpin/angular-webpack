import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/component.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
