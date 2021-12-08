import { TestBed } from '@angular/core/testing';

import { UssdService } from './ussd.service';

describe('UssdService', () => {
  let service: UssdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UssdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
