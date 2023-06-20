import { TestBed } from '@angular/core/testing';

import { FormularioposgradoService } from './formularioposgrado.service';

describe('FormularioposgradoService', () => {
  let service: FormularioposgradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioposgradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
