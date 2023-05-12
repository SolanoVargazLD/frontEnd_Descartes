import { TestBed } from '@angular/core/testing';

import { ServiceDataPosgradoService } from './service-data-posgrado.service';

describe('ServiceDataPosgradoService', () => {
  let service: ServiceDataPosgradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDataPosgradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
