import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexIconComponent } from './flex-icon.component';

describe('FlexIconComponent', () => {
  let component: FlexIconComponent;
  let fixture: ComponentFixture<FlexIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
