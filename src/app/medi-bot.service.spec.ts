import { TestBed } from '@angular/core/testing';

import { MediBotService } from './medi-bot.service';

describe('MediBotService', () => {
  let service: MediBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
