import { TestBed } from '@angular/core/testing';

import { ServiceEditPosgradoService } from './service-edit-posgrado.service';

describe('ServiceEditPosgradoService', () => {
  let service: ServiceEditPosgradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEditPosgradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
