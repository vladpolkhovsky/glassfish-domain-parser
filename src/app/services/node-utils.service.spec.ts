import { TestBed } from '@angular/core/testing';

import { NodeUtilsService } from './node-utils.service';

describe('NodeUtilsService', () => {
  let service: NodeUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
