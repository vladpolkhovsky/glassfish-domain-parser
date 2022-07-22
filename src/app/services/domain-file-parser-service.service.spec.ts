import { TestBed } from '@angular/core/testing';

import { DomainFileParserServiceService } from './domain-file-parser-service.service';

describe('DomainFileParserServiceService', () => {
  let service: DomainFileParserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainFileParserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
