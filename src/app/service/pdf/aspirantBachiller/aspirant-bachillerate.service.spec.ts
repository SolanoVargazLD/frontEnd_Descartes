import { TestBed } from '@angular/core/testing';

import { AspirantBachillerateService } from './aspirant-bachillerate.service';

describe('AspirantBachillerateService', () => {
  let service: AspirantBachillerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspirantBachillerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
