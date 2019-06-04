import { TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [NotFoundComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(NotFoundComponent);
    expect(fixture).toBeDefined;
  });
});
