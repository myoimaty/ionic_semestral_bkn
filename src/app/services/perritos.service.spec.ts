import { TestBed } from '@angular/core/testing';

import { PerritosService } from './perritos.service';

describe('PerritosService', () => {
  let service: PerritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
