import { Action } from '@ngrx/store';
import { IHero } from '../reducers/heroes.reducer';

export const HEROES_GET_INFO= '[HEROES] Get all heroes'
export const HEROES_SET_STATE = '[HEROES] Set heroes state'
export const HEROES_SET_FAILED_STATE = '[HEROES] Set heroes failed state'
export const HEROES_UPDATE_HERO_INFO = '[HEROES] Update hero information'

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

export class HeroUpdateHeroInfo implements Action {
  readonly type = HEROES_UPDATE_HERO_INFO;

  constructor(public payload : IHero) {}
}

export type HeroActions = HeroesSetState
                        | HeroesGetInfo
                        | HeroesSetFailedState
                        | HeroUpdateHeroInfo;
