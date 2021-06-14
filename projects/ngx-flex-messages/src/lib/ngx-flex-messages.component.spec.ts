import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlexMessagesComponent } from './ngx-flex-messages.component';

describe('NgxFlexMessagesComponent', () => {
  let component: NgxFlexMessagesComponent;
  let fixture: ComponentFixture<NgxFlexMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxFlexMessagesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlexMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
