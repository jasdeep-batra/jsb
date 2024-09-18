import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableNavbarComponent } from './collapsable-navbar.component';

describe('CollapsableNavbarComponent', () => {
  let component: CollapsableNavbarComponent;
  let fixture: ComponentFixture<CollapsableNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsableNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsableNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
