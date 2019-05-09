import { Action } from '@ngrx/store';
import { IHero } from '../reducers/heroes.reducer';

export const  HEROES_GET_INFO= '[HEROES] Get all heroes'
export const  HEROES_SET_STATE = '[HEROES] Set heroes state'
export const  HEROES_SET_FAILED_STATE = '[HEROES] Set heroes failed state'

export class HeroesGetInfo implements Action {
  readonly type = HEROES_GET_INFO;
}

export class HeroesSetState implements Action {
  readonly type = HEROES_SET_STATE;

  constructor(public payload : IHero[]) {}
}

export class HeroesSetFailedState implements Action {
  readonly type = HEROES_SET_FAILED_STATE;
}

export type HeroActions = HeroesSetState
                        | HeroesGetInfo
                        | HeroesSetFailedState;
