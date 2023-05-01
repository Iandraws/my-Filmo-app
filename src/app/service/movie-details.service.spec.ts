import { TestBed } from '@angular/core/testing';

import { MovieApiServiceService } from '../service/movie-details.service';

describe('MovieDetailsService', () => {
  let service: MovieApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
