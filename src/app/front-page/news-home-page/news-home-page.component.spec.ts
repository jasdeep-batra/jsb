import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHomePageComponent } from './news-home-page.component';

describe('NewsHomePageComponent', () => {
  let component: NewsHomePageComponent;
  let fixture: ComponentFixture<NewsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
