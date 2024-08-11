import { TestBed } from '@angular/core/testing';

import { HighlightRouteService } from './highlight-route.service';

describe('HighlightRouteService', () => {
  let service: HighlightRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
