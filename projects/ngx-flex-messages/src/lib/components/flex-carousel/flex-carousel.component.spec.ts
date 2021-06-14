import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexCarouselComponent } from './flex-carousel.component';

describe('FlexCarouselComponent', () => {
  let component: FlexCarouselComponent;
  let fixture: ComponentFixture<FlexCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexCarouselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
