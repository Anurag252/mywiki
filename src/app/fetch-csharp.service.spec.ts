import { TestBed, inject } from '@angular/core/testing';

import { FetchCsharpService } from './fetch-csharp.service';

describe('FetchCsharpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchCsharpService]
    });
  });

  it('should be created', inject([FetchCsharpService], (service: FetchCsharpService) => {
    expect(service).toBeTruthy();
  }));
});
