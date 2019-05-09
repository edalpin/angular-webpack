import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { heroesReducer } from './store/reducers/heroes.reducer';
import { HeroesEffects } from './store/effects/heroes.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ComponentsModule } from './components/component.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.forRoot({heroes: heroesReducer}),
    EffectsModule.forRoot([HeroesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
