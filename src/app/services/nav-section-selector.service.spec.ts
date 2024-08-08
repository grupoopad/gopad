import { TestBed } from '@angular/core/testing';

import { NavSectionSelectorService } from './nav-section-selector.service';

describe('NavSectionSelectorService', () => {
  let service: NavSectionSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavSectionSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
