import { TestBed } from '@angular/core/testing';

import { ServiceAspirantBachillerateService } from './service-aspirant-bachillerate.service';

describe('ServiceAspirantBachillerateService', () => {
  let service: ServiceAspirantBachillerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAspirantBachillerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
