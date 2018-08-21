import { TestBed, inject } from '@angular/core/testing';

import { GitSearchUsersService } from './git-search-users.service';

describe('GitSearchUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitSearchUsersService]
    });
  });

  it('should be created', inject([GitSearchUsersService], (service: GitSearchUsersService) => {
    expect(service).toBeTruthy();
  }));
});
