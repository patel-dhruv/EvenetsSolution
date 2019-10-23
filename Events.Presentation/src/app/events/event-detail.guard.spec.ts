import { TestBed, async, inject } from '@angular/core/testing';

import { EventDetailGuard } from './event-detail.guard';

describe('EventDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDetailGuard]
    });
  });

  it('should ...', inject([EventDetailGuard], (guard: EventDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
