import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import {IHeroesState } from '../../store/reducers/heroes.reducer';

@Component({
  selector: 'heroes-component',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes$: Observable<any[]>;
  constructor(
    private router: Router,
    private store: Store<IHeroesState>
  ) {
    this.heroes$ = this.store.select('heroes');
   }

  editHero(id: string): void{
    this.router.navigate(['/hero-detail', id]);
  }
}
