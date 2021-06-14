import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexSpanComponent } from './flex-span.component';

describe('FlexSpanComponent', () => {
  let component: FlexSpanComponent;
  let fixture: ComponentFixture<FlexSpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexSpanComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
