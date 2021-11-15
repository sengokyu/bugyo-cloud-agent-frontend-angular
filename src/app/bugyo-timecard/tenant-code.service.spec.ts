import { TestBed } from '@angular/core/testing';

import { TenantCodeService } from './tenant-code.service';

describe('TenantCodeService', () => {
  let service: TenantCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
