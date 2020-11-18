import { TestBed } from '@angular/core/testing';

import { ScripsService } from './scrips.service';

describe('ScripsService', () => {
  let service: ScripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
