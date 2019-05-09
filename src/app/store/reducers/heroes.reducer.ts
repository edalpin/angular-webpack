import * as HeroesActions from '../actions/heroes.actions'

export type Actions = HeroesActions.HeroActions

export interface IHero {
  _name: string,
  _height: number,
  _picture: string,
  _nickname: string
}

export interface IHeroesState {
  heroes: IHero[];
}

export function heroesReducer(state: IHero[] = [], action: Actions) {
  switch(action.type) {
    case HeroesActions.HEROES_SET_STATE:
      return state = [...action.payload];

    case HeroesActions.HEROES_SET_FAILED_STATE:
      return state = [];

    default:
      return state;
  }
}
