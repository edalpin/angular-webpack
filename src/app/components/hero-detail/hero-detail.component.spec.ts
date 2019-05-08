import { TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [HeroDetailComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(HeroDetailComponent);
    expect(fixture).toBeDefined;
  });
});
