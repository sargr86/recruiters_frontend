import { TestBed } from '@angular/core/testing';

import { CounselorsService } from './counselors.service';

describe('CounselorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounselorsService = TestBed.get(CounselorsService);
    expect(service).toBeTruthy();
  });
});
