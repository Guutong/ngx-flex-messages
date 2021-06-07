import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexMessagesComponent } from './flex-messages.component';

describe('FlexMessagesComponent', () => {
  let component: FlexMessagesComponent;
  let fixture: ComponentFixture<FlexMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
