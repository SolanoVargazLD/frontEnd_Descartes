import { TestBed } from '@angular/core/testing';

import { ServiceViewAspirantBachillerateService } from './service-view-aspirant-bachillerate.service';

describe('ServiceViewAspirantBachillerateService', () => {
  let service: ServiceViewAspirantBachillerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceViewAspirantBachillerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
