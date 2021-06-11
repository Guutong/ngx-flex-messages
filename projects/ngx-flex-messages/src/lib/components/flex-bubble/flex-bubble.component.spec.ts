import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBubbleComponent } from './flex-bubble.component';

describe('FlexBubbleComponent', () => {
  let component: FlexBubbleComponent;
  let fixture: ComponentFixture<FlexBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexBubbleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
