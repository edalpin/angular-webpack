import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IHeroesState } from './store/reducers/heroes.reducer';
import * as HeroesActions from './store/actions/heroes.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private store: Store<IHeroesState>) {}

  ngOnInit() {
    this.store.dispatch(new HeroesActions.HeroesGetInfo());
  }
}
