import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoxComponent } from './flex-box.component';

describe('FlexBoxComponent', () => {
  let component: FlexBoxComponent;
  let fixture: ComponentFixture<FlexBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
