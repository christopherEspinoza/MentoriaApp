import { TestBed } from '@angular/core/testing';

import { CreateOrEditPersonService } from './create-or-edit-person.service';

describe('CreateOrEditPersonService', () => {
  let service: CreateOrEditPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateOrEditPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
