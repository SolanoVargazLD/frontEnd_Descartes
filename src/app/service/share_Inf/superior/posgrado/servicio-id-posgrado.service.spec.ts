import { TestBed } from '@angular/core/testing';

import { ServicioIdPosgradoService } from './servicio-id-posgrado.service';

describe('ServicioIdPosgradoService', () => {
  let service: ServicioIdPosgradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioIdPosgradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
