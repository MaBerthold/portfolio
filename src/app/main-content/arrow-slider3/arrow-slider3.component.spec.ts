import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowSlider3Component } from './arrow-slider3.component';

describe('ArrowSlider3Component', () => {
  let component: ArrowSlider3Component;
  let fixture: ComponentFixture<ArrowSlider3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrowSlider3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowSlider3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
