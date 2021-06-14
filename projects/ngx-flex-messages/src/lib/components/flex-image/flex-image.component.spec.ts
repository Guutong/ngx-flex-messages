import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexImageComponent } from './flex-image.component';

describe('FlexImageComponent', () => {
  let component: FlexImageComponent;
  let fixture: ComponentFixture<FlexImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
