import { IHeroesState, IHero } from '../reducers/heroes.reducer';
import { createSelector } from '@ngrx/store';

export const selectHeroes = (state: IHeroesState) => state.heroes;

export const getHeroInformation = (heroId: string) => createSelector(
  selectHeroes, (heroes: IHero[]) => {
    if(heroes.length){
      const heroFound = heroes.find((hero: IHero) => {
        return hero._nickname === heroId;
      });

      if(!heroFound) { throw 'Not found' };
      return heroFound
    }
    return null;
  }
)
