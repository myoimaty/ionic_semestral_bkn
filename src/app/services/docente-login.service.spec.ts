import { TestBed } from '@angular/core/testing';

import { DocenteLoginService } from './docente-login.service';

describe('DocenteLoginService', () => {
  let service: DocenteLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocenteLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
