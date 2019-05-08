import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

// Components
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ]
})
export class ComponentsModule { }
