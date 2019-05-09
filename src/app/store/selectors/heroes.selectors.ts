import { IHeroesState, IHero } from '../reducers/heroes.reducer';
import { createSelector } from '@ngrx/store';

export const selectHeroes = (state: IHeroesState) => state.heroes;

export const getHeroInformation = (heroId: string) => createSelector(
  selectHeroes, (heroes: IHero[]) => {
    if(heroes.length){
      return heroes.find((hero: IHero) => {
        return hero._nickname === heroId;
      });
    }
    return {};
  }
)
