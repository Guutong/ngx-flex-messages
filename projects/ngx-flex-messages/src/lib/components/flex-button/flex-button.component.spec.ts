import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexButtonComponent } from './flex-button.component';

describe('FlexButtonComponent', () => {
  let component: FlexButtonComponent;
  let fixture: ComponentFixture<FlexButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
