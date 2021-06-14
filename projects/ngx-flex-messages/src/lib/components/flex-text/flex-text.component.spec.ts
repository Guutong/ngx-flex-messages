import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexTextComponent } from './flex-text.component';

describe('FlexTextComponent', () => {
  let component: FlexTextComponent;
  let fixture: ComponentFixture<FlexTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
