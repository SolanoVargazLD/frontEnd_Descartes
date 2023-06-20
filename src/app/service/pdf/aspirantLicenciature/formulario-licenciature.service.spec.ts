import { TestBed } from '@angular/core/testing';

import { FormularioLicenciatureService } from './formulario-licenciature.service';

describe('FormularioLicenciatureService', () => {
  let service: FormularioLicenciatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioLicenciatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
