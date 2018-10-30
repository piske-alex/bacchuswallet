import { TestBed, inject } from '@angular/core/testing';

import { KYCService } from './kyc.service';

describe('KYCService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KYCService]
    });
  });

  it('should be created', inject([KYCService], (service: KYCService) => {
    expect(service).toBeTruthy();
  }));
});
