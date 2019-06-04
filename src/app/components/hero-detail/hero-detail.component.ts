import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { IHeroesState, IHero } from '../../store/reducers/heroes.reducer';
import { getHeroInformation } from '../../store/selectors/heroes.selectors';
import { HeroUpdateHeroInfo } from '../../store/actions/heroes.actions';

@Component({
  selector: 'hero-detail-component',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: IHero;
  heroForm: FormGroup;
  name: FormControl;
  height: FormControl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<IHeroesState>
  ) { }

  ngOnInit(){
    const heroId: string = this.route.snapshot.params.id;
    this.name = new FormControl();
    this.height = new FormControl();

    this.heroForm = new FormGroup({
      name: this.name,
      height: this.height
    });

    this.store.select(getHeroInformation(heroId)).subscribe(
      (hero: IHero) => {
        if(hero){
          this.hero = hero;
          this.name.setValue(hero._name);
          this.height.setValue(hero._height);
        }
      },
      () => {
        this.router.navigate(['/not-found']);
      }
    );
  }

  return(){
    this.router.navigate(['/heroes']);
  }

  updateHero(){
    const hero: IHero = {
      _name: this.name.value,
      _height: this.height.value,
      _picture: this.hero._picture,
      _nickname: this.hero._nickname,
    };
    this.store.dispatch(new HeroUpdateHeroInfo(hero));
    this.router.navigate(['/heroes']);
  }
}
