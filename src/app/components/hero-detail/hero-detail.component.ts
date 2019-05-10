import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IHeroesState, IHero } from '../../store/reducers/heroes.reducer';
import { getHeroInformation } from '../../store/selectors/heroes.selectors';

@Component({
  selector: 'hero-detail-component',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: IHero;

  constructor(
    private route: ActivatedRoute,
    private store: Store<IHeroesState>
  ) { }

  ngOnInit(){
    const heroId: string = this.route.snapshot.params.id;
    this.store.select(getHeroInformation(heroId)).subscribe((hero: IHero) => {
      this.hero = hero;
    });
  }
}
