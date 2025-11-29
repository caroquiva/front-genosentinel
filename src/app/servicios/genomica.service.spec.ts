import { TestBed } from '@angular/core/testing';

import { GenomicaService } from './genomica.service';

describe('GenomicaService', () => {
  let service: GenomicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenomicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
