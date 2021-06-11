import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexMessageComponent } from './flex-message.component';

describe('FlexMessageComponent', () => {
  let component: FlexMessageComponent;
  let fixture: ComponentFixture<FlexMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexMessageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
