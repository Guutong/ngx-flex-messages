import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexFillerComponent } from './flex-filler.component';

describe('FlexFillerComponent', () => {
  let component: FlexFillerComponent;
  let fixture: ComponentFixture<FlexFillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexFillerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
