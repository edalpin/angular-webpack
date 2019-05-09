import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { HEROES_GET_INFO, HEROES_SET_STATE, HEROES_SET_FAILED_STATE } from '../actions/heroes.actions';

const heroesUrl = 'https://udem.herokuapp.com/heroes';

@Injectable()
export class HeroesEffects {
  @Effect() heroes$: Observable<Action> = this.actions$.ofType(HEROES_GET_INFO)
    .mergeMap(() =>
      this.http.get(heroesUrl)
        .map(heroes => ({type: HEROES_SET_STATE, payload: JSON.parse(heroes.text())}))
        .catch(() => of({type: HEROES_SET_FAILED_STATE}))
    );

  constructor(
    private http: Http,
    private actions$: Actions
  ) {}
}
