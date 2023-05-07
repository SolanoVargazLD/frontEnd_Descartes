import { TestBed } from '@angular/core/testing';

import { ServiceIdBachillerAspirantService } from './service-id-bachiller-aspirant.service';

describe('ServiceIdBachillerAspirantService', () => {
  let service: ServiceIdBachillerAspirantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceIdBachillerAspirantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
