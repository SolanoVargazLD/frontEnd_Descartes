import { TestBed } from '@angular/core/testing';

import { ServiceAspirantService } from './service-aspirant.service';

describe('ServiceAspirantService', () => {
  let service: ServiceAspirantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAspirantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
