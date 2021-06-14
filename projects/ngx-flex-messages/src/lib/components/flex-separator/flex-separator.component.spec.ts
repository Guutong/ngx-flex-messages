import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexSeparatorComponent } from './flex-separator.component';

describe('FlexSeparatorComponent', () => {
  let component: FlexSeparatorComponent;
  let fixture: ComponentFixture<FlexSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexSeparatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
