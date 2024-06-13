import { TestBed } from '@angular/core/testing';

import { GetApiDataServiceService } from './get-api-data-service.service';

describe('GetApiDataServiceService', () => {
  let service: GetApiDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
