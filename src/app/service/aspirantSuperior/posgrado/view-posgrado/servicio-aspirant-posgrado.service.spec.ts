import { TestBed } from '@angular/core/testing';

import { ServicioAspirantPosgradoService } from './servicio-aspirant-posgrado.service';

describe('ServicioAspirantPosgradoService', () => {
  let service: ServicioAspirantPosgradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAspirantPosgradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
