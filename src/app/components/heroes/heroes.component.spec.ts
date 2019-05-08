import { TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [HeroesComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(HeroesComponent);
    expect(fixture).toBeDefined;
  });
});
