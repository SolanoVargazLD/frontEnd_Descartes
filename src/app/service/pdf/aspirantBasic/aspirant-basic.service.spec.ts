import { TestBed } from '@angular/core/testing';

import { AspirantBasicServicePDF } from './aspirant-basic.service';

describe('AspirantBasicService', () => {
  let service: AspirantBasicServicePDF;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspirantBasicServicePDF);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
