import { TestBed } from '@angular/core/testing';

import { FlexMessagesService } from './flex-messages.service';

describe('FlexMessagesService', () => {
  let service: FlexMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlexMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
