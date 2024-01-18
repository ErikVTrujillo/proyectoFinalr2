import { TestBed } from '@angular/core/testing';

import { MensagesService } from './mensages.service';

describe('MensagesService', () => {
  let service: MensagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
