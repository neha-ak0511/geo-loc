import { TestBed } from '@angular/core/testing';

import { DtLogService } from './dt-log.service';

describe('DtLogService', () => {
  let service: DtLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
