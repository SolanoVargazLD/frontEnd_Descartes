import { TestBed } from '@angular/core/testing';

import { ServiceAspirantBasicService } from './service-aspirant-basic.service';

describe('ServiceAspirantBasicService', () => {
  let service: ServiceAspirantBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAspirantBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
