import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule
      ]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(HeroDetailComponent);
    expect(fixture).toBeDefined;
  });
});
