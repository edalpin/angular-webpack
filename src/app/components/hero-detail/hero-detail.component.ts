import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IHeroesState, IHero } from '../../store/reducers/heroes.reducer';
import { getHeroInformation } from '../../store/selectors/heroes.selectors';

@Component({
  selector: 'hero-detail-component',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  hero$: Observable<IHero | {}>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<IHeroesState>
  ) {
    const heroId: string = this.route.snapshot.params.id;
    this.hero$ = this.store.select(getHeroInformation(heroId));
  }

}
