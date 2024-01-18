import { TestBed } from '@angular/core/testing';

import { UsuarioAltaService } from './usuario-alta.service';

describe('UsuarioAltaService', () => {
  let service: UsuarioAltaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioAltaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
