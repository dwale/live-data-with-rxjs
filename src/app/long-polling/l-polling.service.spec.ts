import { TestBed } from '@angular/core/testing';

import { LPollingService } from './l-polling.service';

describe('LPollingService', () => {
  let service: LPollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LPollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
