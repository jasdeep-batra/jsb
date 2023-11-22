import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collector1Component } from './collector1.component';

describe('Collector1Component', () => {
  let component: Collector1Component;
  let fixture: ComponentFixture<Collector1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Collector1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Collector1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
