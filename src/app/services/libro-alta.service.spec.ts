import { TestBed } from '@angular/core/testing';

import { LibroAltaService } from './libro-alta.service';

describe('LibroAltaService', () => {
  let service: LibroAltaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroAltaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
