import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowSlider2Component } from './arrow-slider2.component';

describe('ArrowSlider2Component', () => {
  let component: ArrowSlider2Component;
  let fixture: ComponentFixture<ArrowSlider2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrowSlider2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowSlider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
