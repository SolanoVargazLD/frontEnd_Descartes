import { TestBed } from '@angular/core/testing';

import { ListSuperiorService } from './list-superior.service';

describe('ListSuperiorService', () => {
  let service: ListSuperiorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSuperiorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
